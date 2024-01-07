const { mongoose, Schema } = require("mongoose");

const OrderSchema = new Schema({
  user_id: { type: Number, required: true },
  cartItems: { type: String },
});
OrderSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});
module.exports = mongoose.model("Order", OrderSchema);
