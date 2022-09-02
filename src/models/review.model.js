const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Review = mongoose.model("review", reviewSchema);
module.exports = Review;
