import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";

const verifyJwt = async (req, res, next) => {
  try {
    const token =
      req.cookies?.threadsToken ||
      req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res
        .status(401)
        .json(
          new ApiError(401, "Access token is required for authentication.")
        );
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedToken) {
      return res.status(401).json(new ApiError(401, "Invalid access token."));
    }

    const user = await User.findById(decodedToken.userId);
    if (!user) {
      return res
        .status(404)
        .json(new ApiError(404, "User associated with the token not found."));
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("JWT verification failed:", error.message);
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json(new ApiError(401, "Invalid access token."));
    } else if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json(new ApiError(401, "Access token has expired."));
    } else {
      return res
        .status(500)
        .json(
          new ApiError(
            500,
            error.message || "Internal server error during token verification."
          )
        );
    }
  }
};

export default verifyJwt;
