const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAllUsers = (req, res, next) => {
  User.find()
    .then((users) => {
      res.json({
        users,
      });
    })
    .catch((err) => {
      res.json({
        message: `Error caught: ${err}`,
      });
    });
};

const getUser = (req, res, next) => {
  let userID = req.body.userID;
  User.findById(userID)
    .then((response) => res.json(response))
    .catch((err) => {
      res.json({
        message: `Error caught: ${err}`,
      });
    });
};

const registerUser = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
      const user = new User({
        login: req.body.login,
        //login: (Math.pow(Math.random(), Math.random()) * 10000000).toFixed(0),
        password: hashedPassword,
      });
      user
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
    })
    .catch((error) => {
      res.status(500).send({
        message: "Password was not hashed successfully",
        error,
      });
    });
};

const loginUser = (req, res, next) => {
  User.findOne({ login: req.body.login })
    .then((user) => {
      bcrypt
        .compare(req.body.password, user.password)
        .then((passwordCheck) => {
          if (!passwordCheck) {
            res.status(400).send({
              message: "Passwords does not match - If block", //ошибка при неправильном пароле
            });
          }

          const token = jwt.sign(
            {
              userId: user._id,
              userLogin: user.login,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          res.status(200).send({
            message: "Login Successful",
            login: user.login,
            token,
          });
        })
        .catch(() => {
          res.status(400).send({
            message: "Passwords does not match",
          });
        });
    })
    .catch((e) => {
      res.status(404).send({
        message: "Login not found",
        e,
      });
    });
};

const updateUser = (req, res, next) => {
  let userID = req.body.userID;

  let updatedData = {
    login: req.body.login,
    email: req.body.email,
  };

  User.findByIdAndUpdate(userID, { $set: updatedData })
    .then(() => {
      res.json({
        message: `User ${userID} is updated`,
      });
    })
    .catch((err) => {
      res.json({
        message: `Error caught: ${err}`,
      });
    });
};

const removeUser = (req, res, next) => {
  let userID = req.body.userID;

  User.findByIdAndRemove(userID)
    .then(() => {
      res.json({
        message: `User ${userID} is removed`,
      });
    })
    .catch((err) => {
      res.json({
        message: `Error caught: ${err}`,
      });
    });
};

module.exports = {
  getAllUsers,
  getUser,
  updateUser,
  removeUser,
  registerUser,
  loginUser,
};
