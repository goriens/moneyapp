const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    Gender: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
