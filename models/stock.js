const mongoose = require('mongoose');

// Define Schemes
const stockDataSchema = new mongoose.Schema({
  stock_name: { type: String, required: true, unique: true },
    stock_code: { type: String, required: true, unique: true },
    stock_price: { type: Number, required: true },
    stock_price_change: { type: Number, required: true },
    stock_price_change_percent: { type: Number, required: true },
    stock_volume: { type: Number, required: true },
    stock_market_cap: { type: Number, required: true },
    stock_pe_ratio: { type: Number, required: true },
    stock_eps: { type: Number, required: true },
    stock_dividend: { type: Number, required: true },
    stock_dividend_yield: { type: Number, required: true },
    stock_earnings_per_share: { type: Number, required: true },
    stock_52_week_high: { type: Number, required: true },
    stock_52_week_low: { type: Number, required: true },
    stock_52_week_range: { type: String, required: true },
    stock_market_cap_change: { type: Number, required: true },
    stock_market_cap_change_percent: { type: Number, required: true },
    stock_price_change_change: { type: Number, required: true },
    stock_price_change_change_percent: { type: Number, required: true },
    
},
{
  timestamps: true
});

// Create Model & Export
module.exports = mongoose.model('Todo', todoSchema);