import express from "express";
import verifyJwt from "../middlewares/auth.middleware.js";
import {
  checkout,
  getKey,
  verifyPayment,
} from "../controllers/order.controller.js";

const router = express.Router();

router.post("/checkout", verifyJwt, checkout);
router.post("/verify", verifyPayment);
router.get("/key", verifyJwt, getKey);

export default router;
