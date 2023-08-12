import { Router } from "express";
import User from "../../models/user.js";

const userRoute = Router();

userRoute.post("/register", async (req, res) => {
  const { name, password } = req.body;

  if (!name) {
    return res.status(400).send("Name is required");
  }

  if (!password) {
    return res.status(400).send("Password is required");
  }

  try {
    var user = await User.findOne({ name: name });

    if (user) {
      return res.status(400).send("User already exists, login instead");
    }

    user = new User({ name: name, password: password });
    user = await user.save();

    return res.status(201).send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Sorry, something went wrong");
  }
});

userRoute.get("/", (req, res) => {
  return res.status(200).send("GET is working");
});

export default userRoute;



// npm i connect-ensure-login
// ensureLoggedIn('/login'),