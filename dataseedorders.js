require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/productModel");

// connect do mongoodb
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // run server
    console.log("success input data seeds");
  })
  .catch((err) => {
    console.log(err);
  });

const seedOrders = [
  {
    user_id: 1,
    cartItems: [123, 234, 345],
  },
];

Product.save(seedOrders)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
