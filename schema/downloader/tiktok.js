module.exports = {
	get: {
		tags: ["Downloader"],
		summary: "Tiktok media downloader.",
		parameters: [
			{
				in: "query",
				name: "url",
				schema: {
					type: "string",
				},
				required: true,
				description: "Tiktok video downloader.",
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
			// 					result: {
			// 						type: "object",
			// 						properties: {
			// 							author: {
			// 								type: "string",
			// 								example: "@s.targirl_0",
			// 							},
			// 							title: {
			// 								type: "string",
			// 								example: "viral wak",
			// 							},
			// 							wm: {
			// 								type: "string",
			// 								example: "http://dl1.filemate18.shop/tiktok-dl...",
			// 							},
			// 							nowm: {
			// 								type: "string",
			// 								example: "http://dl1.filemate18.shop/tiktok-dl...",
			// 							},
			// 							audio: {
			// 								type: "string",
			// 								example: "http://dl1.filemate18.shop/tiktok-dl...",
			// 							},
			// 							thumbnail: {
			// 								type: "string",
			// 								example: "https://lovetik.com/images...",
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