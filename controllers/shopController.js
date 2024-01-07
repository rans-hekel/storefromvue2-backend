const Product = require("../models/productModel");

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
};

module.exports = { getProducts };
