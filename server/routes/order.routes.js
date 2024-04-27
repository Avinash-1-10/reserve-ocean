import express from "express";
import verifyJwt from "../middlewares/auth.middleware";
import {
  checkout,
  getKey,
  verifyPayment,
} from "../controllers/order.controller";

const router = express.Router();

router.post("/chekout", verifyJwt, checkout);
router.post("/verify", verifyPayment);
router.key("/key", verifyJwt, getKey);
