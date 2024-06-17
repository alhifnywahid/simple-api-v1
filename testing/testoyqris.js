const axios = require("axios");

const QRIS = async (ammount, name, phone = null, note = null, email = null) => {
	if (!name && !ammount) return "Please input parameter name and ammount!";
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

		return response.data;
	} catch (error) {
		console.error("Error fetching:", error);
		throw error;
	}
};
const Shopeepay = async (ammount, name, phone = null, note = null, email = null) => {
	if (!name && !ammount) return "Please input parameter name and ammount!";
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

		return response.data;
	} catch (error) {
		console.error("Error fetching:", error);
		throw error;
	}
};

Shopeepay(20000, "Roni").then((e) => console.log(e));

// axios.get("https://checkout.oyindonesia.com/b2x/v2/pay/status/enc/90425bca-5b57-4c37-b82c-c2e0eab90804?charge_tx_id=3cce8392-76dc-4bee-be1c-7f86ca96d2fb").then((data) => console.log(data.data));

// fetch("https://checkout.oyindonesia.com/b2x/v2/pay/ewallet/create", {
// 	credentials: "omit",
// 	headers: {
// 		"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:127.0) Gecko/20100101 Firefox/127.0",
// 		Accept: "application/json, text/plain, */*",
// 		"Accept-Language": "id,en-US;q=0.7,en;q=0.3",
// 		"Content-Type": "application/json",
// 		"Sec-Fetch-Dest": "empty",
// 		"Sec-Fetch-Mode": "cors",
// 		"Sec-Fetch-Site": "same-site",
// 		Priority: "u=1",
// 	},
// 	referrer: "https://pay.oyindonesia.com/",
// 	body: JSON.stringify({ tx_id: "90425bca-5b57-4c37-b82c-c2e0eab90804", amount: 10000, sender_name: "Rohim", sender_phone: "", sender_notes: "", sender_email: "", email_active: true, ewallet_type: "shopeepay_ewallet" }),
// 	method: "POST",
// 	mode: "cors",
// })
// 	.then((data) => data.json())
// 	.then((res) => console.log(res));
