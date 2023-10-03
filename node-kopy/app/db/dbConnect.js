const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const dbConnect = async () => {
  mongoose
    .connect(process.env.MONGODB_DB_ADDRESS, {
      autoIndex: true,
    })
    .then(() => {
      console.log("Successfully connected to MongoDB!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB!");
      console.error(error);
    });
};

module.exports = dbConnect;
