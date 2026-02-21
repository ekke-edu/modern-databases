import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    email: String,
    age: Number
  },
  {
    collection: "users"
  }
);

const User = mongoose.model("User", userSchema);

export default User;