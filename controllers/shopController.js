const Product = require("../models/productModel");

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
};

const findProducts = async (req, res) => {
  Product.findOne({
    code: req.params.id,
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error while retrieving product.",
      });
    });
};

module.exports = { getProducts, findProducts };
