const mongoose = require("mongoose");

// Define Schemes
const stockSchema = new mongoose.Schema(
  {
    stock_name: { type: String, required: true },
    price: { type: Number, required: true },
    stock_count: { type: Number },
    session_code: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Create Model & Export
module.exports = mongoose.model("Stock", stockSchema);