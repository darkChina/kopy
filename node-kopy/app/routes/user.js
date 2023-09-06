const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

router.get("/", UserController.getAllUsers);
router.post("/show", UserController.getUser);
router.post("/update", UserController.updateUser);
router.post("/remove", UserController.removeUser);
router.post("/register", UserController.registerUser);
router.post("/login", UserController.loginUser);

module.exports = router;