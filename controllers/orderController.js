const Order = require("../models/orderModel");

const getOrders = async (req, res) => {
  const id = Number(req.params.id);
  Order.aggregate([
    {
      $match: {
        user_id: id,
      },
    },
    {
      $lookup: {
        from: "products",
        localField: "cartItems",
        foreignField: "code",
        as: "products",
      },
    },
  ])
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error while retrieving products.",
      });
    });
};

module.exports = { getOrders };
