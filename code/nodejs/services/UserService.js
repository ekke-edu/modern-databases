import User from "../models/User.js";

export async function getAllUsers() {
  return User.find();
}

export async function createUser(user) {
  return await User.create(user);
}
export async function getUserById(id) {
  return await User.findById(id);
}

export async function updateUser(id, user) {
  return await User.findByIdAndUpdate(id, user);
}

export async function deleteUser(id) {
  return await User.findByIdAndDelete(id);
}
