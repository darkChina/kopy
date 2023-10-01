const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubscriptionsSchema = new Schema(
  {
    subscriptionId: {
      type: Number,
    },
    strategyId: {
      type: Number,
    },
    followerId: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Subscription = mongoose.model("subscriptions", SubscriptionsSchema);
module.exports = Subscription;
