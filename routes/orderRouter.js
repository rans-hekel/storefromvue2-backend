const express = require("express");
const {
  getOrders,
  addToCart,
  removeFromCart,
} = require("../controllers/orderController");

const router = express.Router();

router.get("/user/:id", getOrders);

router.post("/update/user/:id", addToCart);

router.delete("/delete/user/:id/product/:code", removeFromCart);

module.exports = router;
