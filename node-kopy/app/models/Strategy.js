const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StrategySchema = new Schema(
  {
    name: {
      type: String,
    },
    risk: {
      type: Number,
    },
    investors: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Strategy = mongoose.model("Strategy", StrategySchema);
module.exports = Strategy;
