import { loginService, registerService } from "../services/auth.service.js";
import asyncHandler from "../utils/asyncHandler.js";

// ------------- Controller to register the user -------------
export const registerController = asyncHandler(async (req, res) => {
  let userData = req.body;
  // Call the service to register the user
  let { user, token } = await registerService(userData);

  //save the token in cookie
  res.cookie("token", token);

  // Send response to the client
  res.status(201).json({
    status: true,
    message: "User registered successfully",
    user,
  });
});

// ------------- Controller to login the user -------------
export const loginController =asyncHandler(async (req,res) => {
  let userData = req.body;
  //Call the login service to login the user
  let{ user, token }= await loginService(userData)

  //save the token in cookie
  res.cookie("token", token);

  // Send response to the client
  res.status(201).json({
    status: true,
    message: "User logged in successfully",
    user,
  });
})
