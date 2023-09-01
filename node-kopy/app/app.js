const express = require("express");
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/hello", (req, res) => {
  res.send({ serverTime: Date.now() });
});

app.post("/hello", (req, res) => {
  res.status(200).send({ text: "Successfully registered!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
