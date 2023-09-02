const express = require("express");
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const dbName = "testdb";
const port = 3000;

const UserRouter = require("./routes/user.js")


mongoose.connect(`mongodb://localhost:27017/${dbName}`);
const db = mongoose.connection;

db.on('error', err => {
  console.log(err);
})

db.on("open", () => {
  console.log(`Mongo: connected to ${dbName}`);
})

app.use(cors());
app.use(bodyParser.json());
app.use("/api/user", UserRouter);

app.get("/hello", (req, res) => {
  res.send({ serverTime: Date.now() });
});

app.post("/hello", (req, res) => {
  res.status(200).send({ text: "Successfully registered!" });
});

app.listen(port, () => {
  console.log(`REST is listening on port ${port}`);
});
