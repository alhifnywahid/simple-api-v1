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
const Dana = async (ammount, name, phone = null, note = null, email = null) => {
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
			ewallet_type: "dana_ewallet",
		};

		const response = await axios.post("https://checkout.oyindonesia.com/b2x/v2/pay/ewallet/create", data);

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

// LinkAja(20000, "Roni").then((e) => console.log(e));

// fetch("https://backend.saweria.co/donations/9634f2c0-b00e-4fed-9657-a59ed4c60673", {
// 	// credentials: "include",
// 	headers: {
// 		"content-type": "application/json",
// 	},
// 	// referrer: "https://saweria.co/",
// 	body: JSON.stringify({
// 		agree: true,
// 		notUnderage: true,
// 		message: "sdf",
// 		amount: "1000",
// 		payment_type: "qris",
// 		vote: "",
// 		currency: "IDR",
// 		customer_info: {
// 			first_name: "gopret",
// 			email: "jackkolor69@gmail.com",
// 			phone: "",
// 		},
// 	}),
// 	method: "POST",
// 	// mode: "cors",
// })
// 	.then((e) => e.json())
// 	.then((e) => console.log(e));

fetch("https://saweria.co/cdn-cgi/rum?", {
	credentials: "include",
	headers: {
		"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:127.0) Gecko/20100101 Firefox/127.0",
		Accept: "*/*",
		"Accept-Language": "id,en-US;q=0.7,en;q=0.3",
		"content-type": "application/json",
		"sentry-trace": "e867634ec86a4597836fbd024c6e3c8e-96370f2aca3e64ec-0",
		"Sec-Fetch-Dest": "empty",
		"Sec-Fetch-Mode": "cors",
		"Sec-Fetch-Site": "same-origin",
	},
	referrer: "https://saweria.co/gopret",
	body: '{"memory":{},"resources":[],"referrer":"","eventType":1,"firstPaint":0,"firstContentfulPaint":282,"startTime":1718679348039,"versions":{"fl":"2024.4.1","js":"2024.6.1","timings":2},"pageloadId":"0da09075-0eee-4606-a888-44d410e2a844","location":"https://saweria.co/gopret","nt":"reload","timingsV2":{"unloadEventStart":198,"unloadEventEnd":200,"domInteractive":935,"domContentLoadedEventStart":1282,"domContentLoadedEventEnd":1285,"domComplete":1315,"loadEventStart":1315,"loadEventEnd":1355,"type":"reload","redirectCount":0,"initiatorType":"navigation","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":3,"domainLookupStart":30,"domainLookupEnd":30,"connectStart":31,"connectEnd":110,"secureConnectionStart":31,"requestStart":110,"responseStart":179,"responseEnd":189,"transferSize":21183,"encodedBodySize":20619,"decodedBodySize":64216,"name":"https://saweria.co/gopret","entryType":"navigation","startTime":0,"duration":1355},"siteToken":"8b2b60a527b84544bd7bad250e075c30","st":2}',
	method: "POST",
	mode: "cors",
});
// .then((e) => e.text())
// .then((e) => console.log(e));

fetch("https://en.y2mate.is/analyze", {
	"credentials": "include",
	"headers": {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:127.0) Gecko/20100101 Firefox/127.0",
			"Accept": "application/json, text/javascript, */*; q=0.01",
			"Accept-Language": "id,en-US;q=0.7,en;q=0.3",
			"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
			"X-CSRF-TOKEN": "D6lTC1U4GNEWLctGhuz6Tek8sJY1tks9twAdI99l",
			"X-Requested-With": "XMLHttpRequest",
			"Alt-Used": "en.y2mate.is",
			"Sec-Fetch-Dest": "empty",
			"Sec-Fetch-Mode": "cors",
			"Sec-Fetch-Site": "same-origin"
	},
	"referrer": "https://en.y2mate.is/v49/",
	"body": "url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DyRyyE1T-0qs",
	"method": "POST",
	"mode": "cors"
})
.then((e) => e.text())
.then((e) => console.log(e));

/* 

[Function: ytdl] {
  getBasicInfo: [AsyncFunction (anonymous)],
  getInfo: [AsyncFunction (anonymous)],
  chooseFormat: [Function (anonymous)],
  filterFormats: [Function (anonymous)],
  validateID: [Function (anonymous)],
  validateURL: [Function (anonymous)],
  getURLVideoID: [Function (anonymous)],
  getVideoID: [Function (anonymous)],
  cache: {
    sig: Cache(0) [Map] { timeout: 1000 },
    info: Cache(0) [Map] { timeout: 1000 },
    watch: Cache(0) [Map] { timeout: 1000 },
    cookie: Cache(0) [Map] { timeout: 86400000 }
  },
  version: '4.11.5',
  downloadFromInfo: [Function (anonymous)]
}

*/
