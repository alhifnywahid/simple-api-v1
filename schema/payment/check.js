module.exports = {
	get: {
		tags: ["Payment Gateway"],
		summary: "Cek status pembayaran.",
		parameters: [
			{
				in: "query",
				name: "tx_id",
				schema: {
					type: "string",
				},
				required: true,
				description: "id transaksi.",
			},
		],
		responses: {
			// 200: {
			// 	description: "Response jika berhasil.",
			// 	content: {
			// 		"application/json": {
			// 			schema: {
			// 				type: "object",
			// 				properties: {
			// 					status: {
			// 						type: "boolean",
			// 						example: true,
			// 					},
			// 					data: {
			// 						type: "object",
			// 						properties: {
			// 							trx_id: {
			// 								type: "string",
			// 								example: "3cce8392-76dc-4bee-be1c-7f86ca96d2fb",
			// 							},
			// 							nominal: {
			// 								type: "string",
			// 								example: 10000,
			// 							},
			// 							qris_url: {
			// 								type: "string",
			// 								example: "https://checkout.oyindonesia.com/api/qris/image/3cce8392-76dc-4bee-be1c-7f86ca96d2fb",
			// 							},
			// 							expired: {
			// 								type: "string",
			// 								example: "17/06/2024 - 15:23:25",
			// 							},
			// 						},
			// 					},
			// 				},
			// 			},
			// 		},
			// 	},
			// },
		},
	},
};
