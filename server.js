import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import userRoute from "./routes/user.js";

import { join } from "path";
import pug from "pug";

// Configure .env
dotenv.config();

// Mongo Connection
mongoose.set("strictQuery", false);
mongoose.connect(
  process.env.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to MongoDB");
  }
);

// Express Config
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// importing my routes
// import routes from "./controllers/routes.js";
// const viewsPath = join(__dirname, "../views");
// app.use("/", routes);
app.use("/user", userRoute);

// app.engine("pug", require("pug").__express);
// app.set("view engine", "pug");
// app.set("view", viewsPath);
// app.set("views", join(__dirname, "views"));

// app.use(express.static(join(__dirname, "public")));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`server is running at http://localhost:${PORT}`)
);
