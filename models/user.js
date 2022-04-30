const mongoose = require("mongoose");

// Define Schemes
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    bank_balance: { type: Number, required: true },
    stock_choices: { type: Array},
    session_code: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Create Model & Export
module.exports = mongoose.model("User", userSchema);
