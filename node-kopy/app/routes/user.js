const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");
const auth = require("../auth");

router.get("/", UserController.getAllUsers);
router.post("/show", UserController.getUser);
router.post("/update", UserController.updateUser);
router.post("/remove", UserController.removeUser);
router.post("/register", UserController.registerUser);
router.post("/login", UserController.loginUser);


// router.get("/auth-endpoint", auth, (req, res) => {
//   res.json({ message: "You are authorized to access me" });
// });

module.exports = router;
