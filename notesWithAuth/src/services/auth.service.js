import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import apiError from "../utils/apiError.js";

export const registerService = async (userData) => {
  //check for all required fields
  if (!userData.name || !userData.email || !userData.password) {
    throw new apiError(404, "All fields are required");
  }

  //check if user already exists
  let existingUser = await userModel.findOne({ email: userData.email });

  if (existingUser) {
    throw new apiError(400, "User already exists");
  }

  //hash the password
  let hashPassword = bcrypt.hashSync(userData.password, 10);

  //create new user and save the user to database
  let newUser = await userModel.create({
    name: userData.name,
    email: userData.email,
    password: hashPassword,
  });

  // create JWT token for the user
  let token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  return { user: newUser, token };
};

export const loginService = async (userData) => {
  //check for all required fields
  if (!userData.email || !userData.password) {
    throw new apiError(404, "All fields are required");
  }

  //check if user already exists
  let existingUser = await userModel.findOne({ email: userData.email });
  if (!existingUser) {
    throw new apiError(400, "User not found. please register first");
  }

  //compare password
  let comparePass = await bcrypt.compareSync(
    userData.password,
    existingUser.password,
  );

  if (!comparePass) throw new apiError(401, "Invalid credentials");

  // create JWT token for the user
  let token = jwt.sign({ id:existingUser._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  return {user: existingUser, token}
};
