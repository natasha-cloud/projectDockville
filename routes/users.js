import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { Router } from "express";

import User from "../models/user.js";

dotenv.config();
const userRoutes = Router();

// Register
userRoutes.post("/register", async (req, res) => {
  // Destructure request body
  const { username, password } = req.body;

  try {
    // Find user whose username matches
    var user = await User.findOne({ username: username });

    // Check if user exists
    if (user) {
      // If user exists, do not create new just respond
      return res.status(400).send("Account already exists");
    } else {
      // If user does not exist, create new and insert to mongoDB
      user = new User({ username: username, password: password });
      user = await user.save();

      // Generate JWT token for making requests
      // You can remove this if you do not want, it's for securing endpoints
      const token = jwt.sign({ uid: user._id }, process.env.JWT_SECRET_KEY);

      // Return created user and token with status code 201
      return res.status(201).send({ user: user, token: token });
    }
  } catch (error) {
    // Catch any error that occurs in between
    console.log(error);
    return res.status(500).send("Sorry, something went wrong");
  }
});

// Login
userRoutes.post("/login", async (req, res) => {
  // Destructure request body
  const { username, password } = req.body;

  try {
    // Find user whose username matches
    const user = await User.findOne({ username: username });

    // Check if user exists and password matches
    if (user && (await user.matchPassword(password))) {
      // Generate JWT token for making requests
      // You can remove this if you do not want, it's for securing endpoints
      const token = jwt.sign({ uid: user._id }, process.env.JWT_SECRET_KEY);

      // Return created user and token with status code 201
      return res.status(200).send({ token: token, user: user });
    } else {
      // If user does not exists or password mismatch
      return res.status(400).send("Invalid Credentials");
    }
  } catch (error) {
    // Catch any error that occurs in between
    console.log(error);
    return res.status(500).send("Sorry, something went wrong");
  }
});

export default userRoutes;
