module.exports = {
	get: {
		tags: ["Data Mahasiwsa"],
		summary: "Cek data mahasiswa.",
		parameters: [
			{
				in: "query",
				name: "nim",
				schema: {
					type: "string",
				},
				required: true,
				description: "NIM",
			},
			{
				in: "query",
				name: "password",
				schema: {
					type: "string",
				},
				required: true,
				description: "Password",
			},
		],
		responses: {},
	},
};
