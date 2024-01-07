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

const addToCart = async (req, res) => {
  const id = Number(req.params.id);
  const productCode = String(req.body.product);

  Order.updateOne(
    {
      user_id: id,
    },
    {
      $addToSet: {
        cartItems: productCode,
      },
    }
  )
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(409).json({
        message: err.message || "Some error while add to cart.",
      });
    });
};

const removeFromCart = async (req, res) => {
  const id = Number(req.params.id);
  const productCode = String(req.params.code);

  Order.updateOne(
    {
      user_id: id,
    },
    {
      $pull: {
        cartItems: productCode,
      },
    }
  )
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || "Some error while add to cart.",
      });
    });
};

module.exports = { getOrders, addToCart, removeFromCart };
