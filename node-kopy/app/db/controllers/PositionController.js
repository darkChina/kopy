const Position = require("../models/Position.js");

const getPositionsByLogin = (req, res, next) => {
  Position.find({login: req.body.login})
    .then((positions) => {
      res.json({
        positions,
      });
    })
    .catch((err) => {
      res.json({
        message: `Error caught: ${err}`,
      });
    });
};

module.exports = {
    getPositionsByLogin,
};
