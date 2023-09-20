const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DealSchema = new Schema(
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

const Deal = mongoose.model("Deal", DealSchema);
module.exports = Deal;
/*

openTime
openPrice
closeTime
closePrice
*/
