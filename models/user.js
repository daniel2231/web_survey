const mongoose = require("mongoose");

// Define Schemes
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    bank_balance: { type: Number},
    stock1: { type: String},
    stock2: { type: String},
    session_code: { type: String, required: true },
    condition: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Create Model & Export
module.exports = mongoose.model("User", userSchema);
