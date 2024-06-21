const swaggerUi = require("swagger-ui-express");
const config = require("./config"); 
const { SwaggerTheme, SwaggerThemeNameEnum } = require("swagger-themes");

const theme = new SwaggerTheme();
const inUrl = "Please input URL!";
const inQuery = "Please input Query!";

const options = {
	customSiteTitle: config.options.webName,
	customfavIcon: config.options.favicon,
	customJs: [
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js",

  ],
	customCssUrl: [
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.css",
    // "./style.css"
  ],
	customCss: `${theme.getBuffer(SwaggerThemeNameEnum.LIGHT)}.topbar { display: none; }`,
	swaggerOptions: {
		displayRequestDuration: true,
	},
};

const swaggerDocument = {
	openapi: "3.0.0",
	info: {
		title: config.options.name,
		description: config.options.description,
		version: "1.0.0",
		"x-logo": {
			url: config.options.favicon,
			altText: config.options.name,
		},
	},
	servers: [
		{
			url: config.host.BASE_URL,
		},
	],
	tags: [
		{
			name: "Payment Gateway",
			description: "List pembayaran",
		},
		{
			name: "Downloader",
			description: "List media downloader",
		},
		{
			name: "E - Commerce",
			description: "Testing produk untuk kebutuh web toko online.",
		},
	],
	paths: {
		"/api/downloader/tiktok": require("./downloader/tiktok"),
		"/api/payment/check": require("./payment/check"),
		"/api/payment/qris": require("./payment/qris"),
		"/api/payment/shopeepay": require("./payment/shopeepay"),
		"/api/ecommerce/products": require("./ecommerce/products"),
		"/api/cekbro": require("./datamhs"),
	},
	"x-request-time": new Date().toISOString(),
};

module.exports = { swaggerDocument, options };
