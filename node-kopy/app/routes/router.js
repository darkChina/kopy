const express = require("express");
const router = express.Router();

const UserController = require("../db/controllers/UserController");
const PositionController = require("../db/controllers/PositionController");
const StrategyController = require("../db/controllers/StrategyController");
const SubscriptionController = require("../db/controllers/SubscriptionController");
const auth = require("../auth");

router.get("/users/", UserController.getAllUsers);
router.post("/users/show", UserController.getUser);
router.post("/users/update", UserController.updateUser);
router.post("/users/remove", UserController.removeUser);
router.post("/users/register", UserController.registerUser);
router.post("/users/login", UserController.loginUser);

router.post("/positions/get", PositionController.getPositionsByLogin);

router.get("/strategies/get", StrategyController.getStrategies);

router.post("/subscriptions/create", SubscriptionController.createSubscription);


// router.get("/auth-endpoint", auth, (req, res) => {
//   res.json({ message: "You are authorized to access me" });
// });

module.exports = router;
