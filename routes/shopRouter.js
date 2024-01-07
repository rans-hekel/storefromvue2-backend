const express = require("express");
const { getProducts, findProducts } = require("../controllers/shopController");

const router = express.Router();

router.get("/", getProducts);

router.get("/:id", findProducts);

module.exports = router;
