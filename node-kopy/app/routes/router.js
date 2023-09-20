const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");
const DealController = require("../controllers/DealController");
const StrategyController = require("../controllers/StrategyController");
const auth = require("../auth");

router.get("/user/", UserController.getAllUsers);
router.post("/user/show", UserController.getUser);
router.post("/user/update", UserController.updateUser);
router.post("/user/remove", UserController.removeUser);
router.post("/user/register", UserController.registerUser);
router.post("/user/login", UserController.loginUser);

router.post("/deals/get", DealController.getDealsByLogin);

router.get("/strategies/get", StrategyController.getStrategies);


// router.get("/auth-endpoint", auth, (req, res) => {
//   res.json({ message: "You are authorized to access me" });
// });

module.exports = router;
