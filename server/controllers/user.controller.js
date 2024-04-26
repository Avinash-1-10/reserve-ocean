import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookies from "../utils/helpers/generateTokenAndSetCookies.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json(new ApiError(409, "An account with this email already exists."));
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    const user = await User.findById(newUser._id).select(
      "-password -createdAt -updatedAt -__v"
    );
    const threadsToken = generateTokenAndSetCookies(user._id, res);
    return res.status(201).json(
      new ApiResponse(201, "Registration successful.", {
        user,
        threadsToken,
      })
    );
  } catch (error) {
    console.error("Error during signup: ", error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          error.message || "An Error Occurred while registering."
        )
      );
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json(new ApiError(404, "User not found."));
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(401).json(new ApiError(401, "Invalid password."));
    }
    const userData = await User.findById(existingUser._id).select(
      "-password -createdAt -updatedAt -__v"
    );
    const threadsToken = generateTokenAndSetCookies(existingUser._id, res);
    return res.status(200).json(
      new ApiResponse(200, "Logged in successfully.", {
        user: userData,
        threadsToken,
      })
    );
  } catch (error) {
    console.error("Error in login: ", error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          error.message || "An Error Occurred while logging in."
        )
      );
  }
};

const logout = async (req, res) => {
  try {
    res.cookie("threadsToken", "", { maxAge: 1 });
    return res
      .status(200)
      .json(new ApiResponse(200, "Logged out successfully."));
  } catch (error) {
    console.error("Error during logout: ", error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          error.message || "An Error Occurred while logging out."
        )
      );
  }
};

export { signup, login, logout };
