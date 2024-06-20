module.exports = {
	get: {
		tags: ["Product"],
		summary: "Testing produk untuk kebutuh web toko online.",
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
		responses: {},
	},
};
