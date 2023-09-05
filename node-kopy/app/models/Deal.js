const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dealSchema = new Schema(
  {
    dealID: {
      type: Number,
    },
    symbol: {
      type: String,
    },
    side: {
      type: String,
    },
    volume: {
      type: Number,
    },
    openTime: {
      type: Date,
      default: Date.now,
    },
    openPrice: {
      type: Number,
    },
    closeTime: {
      type: Date,
      default: Date.now,
    },
    closePrice: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Deal = mongoose.model("Deal", dealSchema);
module.exports = Deal;
/*

openTime
openPrice
closeTime
closePrice
*/
