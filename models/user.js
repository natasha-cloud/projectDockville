import { Schema, model } from "mongoose";

const userSchema = Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
});

export default model("User", userSchema);
