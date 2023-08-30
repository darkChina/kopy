const express = require("express");
const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
  res.send({ serverTime: 123123123123000 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
