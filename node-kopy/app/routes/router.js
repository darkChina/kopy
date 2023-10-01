const express = require("express");
const router = express.Router();

const UserController = require("../db/controllers/UserController");
const UserPositionController = require("../db/controllers/UserPositionController");
const StrategyController = require("../db/controllers/StrategyController");
const StrategyPositionController = require("../db/controllers/StrategyPositionController");
const SubscriptionController = require("../db/controllers/SubscriptionController");
const auth = require("../auth");

router.get("/users/", UserController.getAllUsers);
router.post("/users/show", UserController.getUser);
router.post("/users/update", UserController.updateUser);
router.post("/users/remove", UserController.removeUser);
router.post("/users/register", UserController.registerUser);
router.post("/users/login", UserController.loginUser);

router.post("/positions/get", UserPositionController.getPositionsByLogin);

router.get("/strategies/get", StrategyController.getStrategies);
router.post("/strategies/positions/get", StrategyPositionController.getPositionsByStrategy);

router.post("/subscriptions/create", SubscriptionController.createSubscription);


// router.get("/auth-endpoint", auth, (req, res) => {
//   res.json({ message: "You are authorized to access me" });
// });

module.exports = router;
