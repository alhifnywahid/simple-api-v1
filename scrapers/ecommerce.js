const axios = require("axios");

const getAllProducts = async () => {
	const products = await axios.get(`https://gist.githubusercontent.com/alhifnywahid/0d58fcea7f29b0a7dbb7526156189803/raw/57916552249b834c1b35804473f06fdee33615a8/blibli.json`);

	return products.data;
};

const getProducts = async (startIndex = 0, q = 10) => {
	const getItem = startIndex + q;
	const products = await getAllProducts();

	let productsResult = [];

	for (let i = startIndex; i < getItem; i++) {
		productsResult.push(products[i]);
	}

	return productsResult;
};

const getSingleProducts = async (itemId) => {
	const products = await getAllProducts();

	const productResult = products.filter((product) => product.id == itemId);

	return productResult;
};

const searchProducts = async (query, number = 10) => {
	const q = query.toLowerCase();
	const products = await getAllProducts();

	const productResult = products.filter((product) => {
		const id = product.id.toLowerCase();
		const title = product.title.toLowerCase();
		const brand = product.brand.toLowerCase();
		const price = product.price.toString().toLowerCase();
		const category = product.category.toLowerCase();

		return id.includes(q) || title.includes(q) || brand.includes(q) || category.includes(q) || price.includes(q);
	});

	const productResult2 = [];

	const productsLength = productResult.length > number;

	if (productsLength) {
		for (let i = 0; i < number; i++) {
			productResult2.push(productResult[i]);
		}
	}

	return productsLength ? productResult2 : productResult;
};

module.exports = { getProducts, getSingleProducts, searchProducts };
