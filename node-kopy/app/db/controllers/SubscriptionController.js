const Subscription = require("../models/Subscription.js");

const createSubscription = (req, res, next) => {
  const subscription = new Subscription({
    subscriptionId: (Math.pow(Math.random(), Math.random()) * 10000000).toFixed(0),
    strategyId: req.body.strategy,
    followerId: req.body.follower
  });

  subscription
    .save()
    .then((result) => {
      res.status(201).json({
        result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: `Error caught: ${err}`,
      });
    });
};

module.exports = {
    createSubscription,
};
