const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const pug = require("pug");
// const collection = require("./mongodb");
const connectDB = require("./config/dbConfig")
const port = process.env.PORT || 8080;

// calling the config to run
connectDB();

// importing my routes
const routes = require('./controllers/routes.js');
const viewsPath = path.join(__dirname, '../views');
app.use(express.urlencoded({ extended: false}));
app.use(express.json());app.use('/', routes);
app.use(express.json())


app.engine("pug", require("pug").__express);
app.set("view engine", "pug");
app.set("view",viewsPath);
app.set("views", path.join(__dirname, "views"));




app.use(express.static(path.join(__dirname, "public")))

app.listen(port, () =>console.log(`server is running at http://localhost:${port}`));