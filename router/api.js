const express = require("express");
const danz = require("d-scrape");
const router = express.Router();
const config = require("../schema/config");
const skrep = require("../scrapers/ai");
const payment = require("../scrapers/payment");
const datamhs = require("../scrapers/datamhs");
const { getProducts, getSingleProducts } = require("../scrapers/ecommerce");
const { creator } = config.options;

// Log Info
const messages = {
	error: {
		status: 404,
		creator,
		result: "Error, Service Unavailable",
	},
	notRes: {
		status: 404,
		creator,
		result: "Error, Invalid JSON Result",
	},
	query: {
		status: 400,
		creator,
		result: "Please input parameter query!",
	},
	url: {
		status: 400,
		creator,
		result: "Please input parameter URL!",
	},
	notUrl: {
		status: 404,
		creator,
		result: "Error, Invalid URL",
	},
};

// e - commerce
router.get("/ecommerce/products", async (req, res) => {
	const { q } = req.query;
	try {
		const data = await getProducts(q);
		if (!data) return res.status(404).json(messages.notRes);
		res.json({
			status: true,
			creator,
			result: data,
		});
	} catch (e) {
		res.status(500).json(messages.error);
	}
});

router.get("/ecommerce/product", async (req, res) => {
	const { productId } = req.query;
	if (!productId)
		return res.status(400).json({
			status: false,
			creator,
			message: "id product wajib di isi!",
		});
	try {
		const data = await getSingleProducts(productId);
		if (!data) return res.status(404).json(messages.notRes);
		res.json({
			status: true,
			creator,
			result: data,
		});
	} catch (e) {
		res.status(500).json(messages.error);
	}
});

// data - mhs
router.get("/mhsvalidation", async (req, res) => {
	const { nim, password } = req.query;
	try {
		if (!nim || !password)
			return res.status(400).json({
				status: false,
				creator,
				messeage: "NIM & Password wajib di isi!",
			});
		const data = await datamhs.pddikti(nim, password);
		console.log("HAHAHAA");
		if (!data)
			return res.status(404).json({
				messages: "Masih eror bro!",
			});
		res.status(200).json(data);
	} catch (e) {
		res.status(500).json(messages.error);
	}
});

// AI Routes
router.get("/ai/chatgpt", async (req, res) => {
	const { query } = req.query;
	if (!query) return res.status(400).json(messages.query);

	try {
		const data = await danz.ai.ChatGpt(query);
		if (!data) return res.status(404).json(messages.notRes);
		res.json({
			status: true,
			creator,
			result: {
				message: data,
			},
		});
	} catch (e) {
		res.status(500).json(messages.error);
	}
});

router.get("/ai/gptlogic", async (req, res) => {
	const { query, prompt } = req.query;
	if (!query) return res.status(400).json(messages.query);
	if (!prompt) return res.status(400).json({ status: 400, creator, result: "Please input prompt!" });

	try {
		const data = await danz.ai.gptLogic(query, prompt);
		if (!data) return res.status(404).json(messages.notRes);
		res.json({ status: true, creator, result: data });
	} catch (e) {
		res.status(500).json(messages.error);
	}
});

router.get("/ai/virtualgirl", async (req, res) => {
	const { query } = req.query;
	if (!query) return res.status(400).json(messages.query);

	try {
		const data = await danz.ai.VirtualGirlfriends(query);
		if (!data) return res.status(404).json(messages.notRes);
		res.json({ status: true, creator, result: data });
	} catch (e) {
		res.status(500).json(messages.error);
	}
});

router.get("/ai/dystopia", async (req, res) => {
	const { query } = req.query;
	if (!query) return res.status(400).json(messages.query);

	try {
		const data = await danz.ai.dystopia(query);
		if (!data) return res.status(404).json(messages.notRes);
		res.json({ status: true, creator, result: data });
	} catch (e) {
		res.status(500).json(messages.error);
	}
});

router.get("/ai/ersgan", async (req, res) => {
	const { url } = req.query;
	if (!url) return res.status(400).json(messages.url);

	try {
		const data = await danz.ai.ersgan(url);
		if (!data) return res.status(404).json(messages.notRes);
		res.json({ status: true, creator, result: data });
	} catch (e) {
		res.status(500).json(messages.error);
	}
});

router.post("/ai/luminai", async (req, res) => {
	const { query, username } = req.query;
	if (!query) return res.status(400).json(messages.query);
	if (!username)
		return res.status(400).json({
			status: 400,
			creator,
			result: "Please input Username session!",
		});

	try {
		const data = await skrep.luminai(query, username);
		if (!data) return res.status(404).json(messages.notRes);
		res.json({ status: true, creator, result: data });
	} catch (e) {
		res.status(500).json(messages.error);
	}
});

/* ~~~~~~ payment ~~~~~~ */

router.get("/payment/check", async (req, res) => {
	const { tx_id } = req.query;
	if (!tx_id)
		return res.status(400).json({
			status: 400,
			message: "tx_id wajib di isi!",
			creator,
		});

	try {
		const data = await payment.check(tx_id);
		if (!data) return res.status(404).json(messages.notRes);
		res.json(data);
	} catch (e) {
		res.status(500).json(messages.error);
	}
});

router.get("/payment/qris", async (req, res) => {
	const { ammount, name, phone = null, note = null, email = null } = req.query;
	if (ammount < 10000)
		return res.status(400).json({
			status: 400,
			creator,
			message: "Pembayaran minimal Rp 10.000",
		});
	if (!ammount && !name)
		return res.status(400).json({
			status: 400,
			message: "ammount dan nama wajib di isi!",
			creator,
		});

	try {
		const data = await payment.qris(ammount, name, phone, note, email);
		if (!data) return res.status(404).json(messages.notRes);
		res.json(data);
	} catch (e) {
		res.status(500).json(messages.error);
	}
});

router.get("/payment/shopeepay", async (req, res) => {
	const { ammount, name, phone = null, note = null, email = null } = req.query;
	if (ammount < 10000)
		return res.status(400).json({
			status: 400,
			creator,
			message: "Pembayaran minimal Rp 10.000",
		});
	if (!ammount && !name)
		return res.status(400).json({
			status: 400,
			message: "ammount dan nama wajib di isi!",
			creator,
		});

	try {
		const data = await payment.shopeepay(ammount, name, phone, note, email);
		if (!data) return res.status(404).json(messages.notRes);
		res.json(data);
	} catch (e) {
		res.status(500).json(messages.error);
	}
});

// Downloader Routes
router.get("/downloader/tiktok", async (req, res) => {
	console.log("Request URL: ", req.url);
	console.log("Request Query: ", req.query);
	const { url } = req.query;
	if (!url) return res.status(400).json(messages.url);

	try {
		const data = await danz.downloader.tiktok(url);
		if (!data) return res.status(404).json(messages.notRes);
		res.json({ status: true, creator, result: data });
	} catch (e) {
		res.status(500).json(messages.error);
	}
});

router.get("/downloader/igdl", async (req, res) => {
	const { url } = req.query;
	if (!url) return res.status(400).json(messages.url);

	try {
		const data = await danz.downloader.igdl(url);
		if (!data) return res.status(404).json(messages.notRes);
		res.json({ status: true, creator, result: data });
	} catch (e) {
		res.status(500).json(messages.error);
	}
});

router.get("/downloader/spotify", async (req, res) => {
	const { url } = req.query;
	if (!url) return res.status(400).json(messages.url);

	try {
		const data = await danz.downloader.spotifyDownload(url);
		if (!data) return res.status(404).json(messages.notRes);
		res.json({ status: true, creator, result: data });
	} catch (e) {
		res.status(500).json(messages.error);
	}
});

// Tools Routes
router.get("/tools/remini", async (req, res) => {
	const { url } = req.query;
	if (!url) return res.status(400).json(messages.url);

	try {
		const data = await danz.tools.remini(url);
		if (!data) return res.status(404).json(messages.notRes);
		res.json({ status: true, creator, result: data });
	} catch (e) {
		res.status(500).json(messages.error);
	}
});

module.exports = router;
