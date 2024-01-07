const express = require("express");
const {
  getOrders,
  addToCart,
  removeFromCart,
} = require("../controllers/orderController");

const router = express.Router();

router.get("/user/:id", getOrders);

router.post("/user/:id/add", addToCart);

router.delete("/user/:id/product/:code", removeFromCart);

module.exports = router;
