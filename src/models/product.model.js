const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    Price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("product", productSchema);
module.exports = Product;
