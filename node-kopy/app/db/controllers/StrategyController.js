const Strategy = require("../models/Strategy.js");

const getStrategies = (req, res, next) => {
  Strategy.find({})
    .then((strategies) => {
      res.json({
        strategies,
      });
    })
    .catch((err) => {
      res.json({
        message: `Error caught: ${err}`,
      });
    });
};

module.exports = {
  getStrategies,
};
