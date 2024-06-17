const axios = require("axios");
const { dateFormat } = require("./../lib/Function");

const qris = async (ammount, name, phone = null, note = null, email = null) => {
	try {
		const data = {
			tx_id: "90425bca-5b57-4c37-b82c-c2e0eab90804",
			amount: ammount,
			sender_name: name,
			sender_phone: phone,
			sender_notes: note,
			sender_email: email,
			email_active: true,
		};

		const response = await axios.post("https://checkout.oyindonesia.com/b2x/v2/pay/qris/create", data);
		const status = await check(response.data.data.charge_tx_id);
		const date = dateFormat(response.data.data.expired_at);

		return {
			status: true,
			data: {
				status: status.data.status,
				trx_id: response.data.data.charge_tx_id,
				payment_method: status.data.payment_method,
				nama: status.data.nama,
				no_hp: status.data.no_hp,
				catatan: status.data.catatan,
				email: status.data.email,
				qris_url: response.data.data.qris_url,
				expired: date.replace(" ", " - "),
			},
		};
	} catch (error) {
		console.error("Error fetching:", error);
		throw error;
	}
};

const shopeepay = async (ammount, name, phone = null, note = null, email = null) => {
	try {
		const data = {
			tx_id: "90425bca-5b57-4c37-b82c-c2e0eab90804",
			amount: ammount,
			sender_name: name,
			sender_phone: phone,
			sender_notes: note,
			sender_email: email,
			email_active: true,
			ewallet_type: "shopeepay_ewallet",
		};

		const response = await axios.post("https://checkout.oyindonesia.com/b2x/v2/pay/ewallet/create", data);
		const status = await check(response.data.data.charge_tx_id);
		const date = dateFormat(response.data.data.expired_at);

		return {
			status: true,
			data: {
				status: status.data.status,
				trx_id: response.data.data.charge_tx_id,
				payment_method: status.data.payment_method,
				nama: status.data.nama,
				no_hp: status.data.no_hp,
				catatan: status.data.catatan,
				email: status.data.email,
				url: response.data.data.deeplink_url,
				expired: date.replace(" ", " - "),
			},
		};
	} catch (error) {
		console.error("Error fetching:", error);
		throw error;
	}
};

const check = async (tx_id) => {
	try {
		const status = await axios.get(`https://checkout.oyindonesia.com/b2x/v2/pay/status/enc/90425bca-5b57-4c37-b82c-c2e0eab90804?charge_tx_id=${tx_id}`);

		return {
			status: true,
			data: {
				status: status.data.data.status,
				payment_method: status.data.data.payment_method,
				nama: status.data.data.sender_name,
				no_hp: status.data.data.sender_phone,
				catatan: status.data.data.sender_note,
				email: status.data.data.sender_email,
			},
		};
	} catch (error) {
		console.error("Error fetching:", error);
		throw error;
	}
};

module.exports = {
	qris,
	shopeepay,
	check,
};
