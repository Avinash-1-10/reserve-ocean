import express from "express";
import { configDotenv } from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./db/index.js";
import cors from "cors";
import userRouter from "./routes/user.routes.js";
import categoryRouter from "./routes/category.routes.js";
import menuItemRouter from "./routes/menuItem.routes.js";
import orderRouter from "./routes/order.routes.js";
configDotenv();

// Database connection
connectDB();

const app = express();
const PORT = process.env.PORT || 4000;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/menuItem", menuItemRouter);
app.use("/api/v1/order", orderRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
