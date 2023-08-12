import dotenv from "dotenv";
import morgan from "morgan";
import express from "express";
import mongoose from "mongoose";
import { createServer } from "http";
import bodyParser from "body-parser";

import userRoutes from "./routes/users.js";

dotenv.config();
const app = express();

// Morgan logs HTTP requests on the terminal

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ##############################################################
// #################### Database Connection #####################
// ##############################################################

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

// ##############################################################
// ######################## Handle Cors #########################
// ##############################################################

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200);
  }

  next();
});

// ##############################################################
// ######################### Endpoints ##########################
// ##############################################################

// Handle all /users routes
app.use("/users", userRoutes);

// ##############################################################
// ####################### Handle Errors ########################
// ##############################################################

app.use((req, res) => {
  res.status(404 || 500).json({ message: "Invalid Endpoint" });
});

// ##############################################################
// ###################### Run HTTP Server #######################
// ##############################################################

const PORT = process.env.PORT;
const server = createServer(app);
server.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
