import bcrypt from "bcryptjs";
import { Schema, model } from "mongoose";

const userSchema = Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

// Method to compare passwords during logins
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// This runs before saving user model
userSchema.pre("save", async function (next) {
  // Checks if user has not been modified
  if (!this.isModified) {
    next();
  }

  // Encrpyt password if user has not been modified
  this.password = await bcrypt.hash(this.password, 10);
});

// This is for indexing for search
userSchema.index({ "$**": "text" });

// Default export required by ES6
export default model("User", userSchema);
