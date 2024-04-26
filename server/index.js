import express from "express";
import { configDotenv } from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./db/index.js";
import cors from "cors";
import userRouter from "./routes/user.routes.js"
configDotenv();

// Database connection
connectDB();

const app = express();
const PORT = process.env.PORT || 4000;

// middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/user", userRouter)


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
