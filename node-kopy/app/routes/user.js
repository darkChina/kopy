const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

router.get("/", UserController.getAllUsers);
router.post("/show", UserController.getUser);
router.post("/store", UserController.addUser);
router.post("/update", UserController.updateUser);
router.post("/remove", UserController.removeUser);

module.exports = router;