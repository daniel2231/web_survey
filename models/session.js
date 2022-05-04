const mongoose = require("mongoose");

// Define Schemes
const sessionSchema = new mongoose.Schema(
  {
    session_id: { type: String, required: true, unique: true },
    start_time: { type: Date, required: true },
    end_time: { type: Date, required: true },
    user_count: { type: Number, required: true },
    complete_users: { type: Number, required: true },
    stock1: { type: Number, required: true },
    stock2: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

// Create Model & Export
module.exports = mongoose.model("Session", sessionSchema);
