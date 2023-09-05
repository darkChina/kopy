const Deal = require("../models/Deal.js");

// const getAllUsers = (req, res, next) => {
//   User.find()
//     .then((users) => {
//       res.json({
//         users,
//       });
//     })
//     .catch((err) => {
//       res.json({
//         message: `Error caught: ${err}`,
//       });
//     });
// };

// const getUser = (req, res, next) => {
//   let userID = req.body.userID;
//   User.findById(userID)
//     .then((response) => res.json(response))
//     .catch((err) => {
//       res.json({
//         message: `Error caught: ${err}`,
//       });
//     });
// };

// const addUser = (req, res, next) => {
//   let user = new User({
//     name: req.body.name,
//     email: req.body.email,
//   });
//   user
//     .save()
//     .then(() => {
//       res.json({
//         message: "User is added to db",
//       });
//     })
//     .catch((err) => {
//       res.json({
//         message: `Error caught: ${err}`,
//       });
//     });
// };

// const updateUser = (req, res, next) => {
//   let userID = req.body.userID;

//   let updatedData = {
//     name: req.body.name,
//     email: req.body.email,
//   };

//   User.findByIdAndUpdate(userID, { $set: updatedData })
//     .then(() => {
//       res.json({
//         message: `User ${userID} is updated`,
//       });
//     })
//     .catch((err) => {
//       res.json({
//         message: `Error caught: ${err}`,
//       });
//     });
// };

// const removeUser = (req, res, next) => {
//     let userID = req.body.userID;
  
//     User.findByIdAndRemove(userID)
//       .then(() => {
//         res.json({
//           message: `User ${userID} is removed`,
//         });
//       })
//       .catch((err) => {
//         res.json({
//           message: `Error caught: ${err}`,
//         });
//       });
//   };


// module.exports = {
//     getAllUsers,
//     getUser,
//     addUser,
//     updateUser,
//     removeUser
// }