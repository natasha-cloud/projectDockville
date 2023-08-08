const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const collection = require("./models/loginModel.js");
const bcrypt = require("bcrypt");
const router = express.Router();
const path = require("path");

mongoose.set("strictQuery", false);
const mongoDB = "mongodb://localhost:27017";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/views"));
// Route to Homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "../views/pug/index.pug");
});
// Route to Login Page
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/pug/parkingLogin.pug"));
});

app.post("submit form", async (req, res) => {
  const data = {
    email: req.body.email,
    password: req.body.password,
  };
  if (!data.email || !data.password) {
    res.status(400).send("Please enter both email and password");
    return;
  }

  await collection.findOne([data]);
  let hashedPassword = await bcrypt.hash(data.password, 10);
  let user = await collection.findOne({
    email: data.email,
    password: hashedPassword,
  });
  if (user) {
    console.log(user);
    res.render("services");
  } else {
    console.log("No data found");
  }

  res.send("/login");
});
const port = 8080;
app.listen(port, () => console.log(`This app is listening on port ${port}`));
