const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StrategyPositionSchema = new Schema(
  {
    login: {
      type: Number,
    },
    openTime: {
      type: Date,
      default: Date.now,
    },
    symbol: {
      type: String,
    },
    direction: {
      type: String,
    },
    volume: {
      type: Number,
    },
    openPrice: {
      type: Number,
    },
    profit: {
      type: Number,
    },
  },
  { timestamps: true }
);

const StrategyPosition = mongoose.model("strategies_positions", StrategyPositionSchema);
module.exports = StrategyPosition;
