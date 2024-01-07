const { mongoose, Schema } = require("mongoose");

const ProductSchema = new Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  imageUrl: { type: String },
  averageRating: { type: Number },
});
ProductSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});
module.exports = mongoose.model("Product", ProductSchema);
