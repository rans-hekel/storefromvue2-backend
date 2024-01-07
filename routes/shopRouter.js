const express = require("express");
const { getProducts } = require("../controllers/shopController");

const router = express.Router();

router.get("/", getProducts);

module.exports = router;
