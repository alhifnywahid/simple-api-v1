const axios = require("axios");

const getAllProducts = async () => {
	const products = await axios.get(`https://gist.githubusercontent.com/alhifnywahid/0d58fcea7f29b0a7dbb7526156189803/raw/57916552249b834c1b35804473f06fdee33615a8/blibli.json`);

	return products.data;
};

const getProducts = async (q = 10) => {
	const products = await getAllProducts();

	let productsResult = [];

	for (let i = 0; i < q; i++) {
		productsResult.push(products[i]);
	}

	return productsResult;
};

const getSingleProducts = async (itemId) => {
	const products = await getAllProducts()
  
  const productResult = products.filter(product => product.id == itemId)

	return productResult;
};

module.exports = { getProducts, getSingleProducts };
