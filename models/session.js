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
    initialConditionA: { type: Number, required: true },
    initialConditionB: { type: Number, required: true },
    initialConditionC: { type: Number, required: true },
    initialConditionD: { type: Number, required: true },
    conditionA: { type: Number, required: true },
    conditionB: { type: Number, required: true },
    conditionC: { type: Number, required: true },
    conditionD: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

// Create Model & Export
module.exports = mongoose.model("Session", sessionSchema);
