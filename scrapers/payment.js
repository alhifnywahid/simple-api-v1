const axios = require("axios");

exports.qris = async (ammount, name, phone = null, note = null, email = null) => {
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
		const status = await axios.get(`https://checkout.oyindonesia.com/b2x/v2/pay/status/enc/90425bca-5b57-4c37-b82c-c2e0eab90804?charge_tx_id=${response.data.data.charge_tx_id}`);
		console.log(status.data);

		const date = new Date(response.data.data.expired_at);
		const readableDate = `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getFullYear()} ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;

		return {
			status: true,
			data: {
				status: status.data.data.status,
				trx_id: response.data.data.charge_tx_id,
				payment_method: status.data.data.payment_method,
				nama: status.data.data.sender_name,
				no_hp: status.data.data.sender_phone,
				catatan: status.data.data.sender_note,
				email: status.data.data.sender_email,
				qris_url: response.data.data.qris_url,
				expired: readableDate.replace(" ", " - "),
			},
		};
	} catch (error) {
		console.error("Error fetching:", error);
		throw error;
	}
};

// const daa = {
// 	success: true,
// 	error: null,
// 	data: {
// 		username: "monotaroid",
// 		tx_id: "90425bca-5b57-4c37-b82c-c2e0eab90804",
// 		charge_tx_id: "ae08b4f0-0a1a-48bc-b62e-b23aece64a36",
// 		amount: 10000,
// 		tx_ref_number: "2406WCTIKJUF",
// 		expired_at: "2024-06-17T13:10:08",
// 		check_status_url: null,
// 		qris_provider: "shopee",
// 		qris_vendor: "SHOPEE",
// 		qris_url: "https://checkout.oyindonesia.com/api/qris/image/ae08b4f0-0a1a-48bc-b62e-b23aece64a36",
// 		qris_content: "00020101021226610016ID.CO.SHOPEE.WWW01189360091800202098550208202098550303UME51440014ID.CO.QRIS.WWW0215ID10221467340510303UME520453995303360540810078.005802ID5911MONOTARO id6012KAB. SAMPANG61056927362200516024180849934003463045549",
// 	},
// 	reason: null,
// 	status_code: 200,
// };
