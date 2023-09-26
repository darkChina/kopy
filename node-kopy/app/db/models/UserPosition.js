const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserPositionSchema = new Schema(
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

const UserPosition = mongoose.model("users_positions", UserPositionSchema);
module.exports = UserPosition;
