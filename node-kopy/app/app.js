const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

const dbConnect = require("./db/dbConnect.js");
const port = 3000;

const UserRouter = require("./routes/user.js");

dbConnect();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/user", UserRouter);


app.listen(port, () => {
  console.log(`REST is listening on port ${port}`);
});


//https://www.freecodecamp.org/news/how-to-build-a-fullstack-authentication-system-with-react-express-mongodb-heroku-and-netlify/#how-to-create-the-users-model