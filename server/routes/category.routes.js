import { Router } from "express";
import verifyJwt from "../middlewares/auth.middleware.js";
import {
  createCategory,
  getCategories,
} from "../controllers/category.controller.js";

const router = Router();

router.get("/", getCategories);
router.post("/", verifyJwt, createCategory);

export default router;
