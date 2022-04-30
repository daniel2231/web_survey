const mongoose = require("mongoose");

// Define Schemes
const stockSchema = new mongoose.Schema(
  {
    stock_name: { type: String, required: true, unique: true },
    stock_id: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

// Create Model & Export
module.exports = mongoose.model("Stock", stockSchema);
