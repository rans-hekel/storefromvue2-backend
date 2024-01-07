const express = require("express");
const { getOrders } = require("../controllers/orderController");

const router = express.Router();

router.get("/user/:id", getOrders);

module.exports = router;
