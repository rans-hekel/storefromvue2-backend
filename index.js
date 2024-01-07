require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const shoproute = require("./routes/shopRouter");
const orderRoute = require("./routes/orderRouter");

app.use(express.json());
app.use(cors()); // Aktifkan penggunaan cors
app.use(express.urlencoded({ extended: true }));
app.use("/img", express.static(path.join(__dirname, "./public/img")));

app.use("/api", shoproute);
app.use("/api/orders", orderRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // run server
    app.listen(process.env.PORT, () => {
      console.log(`Your App is Listening on port`, process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
