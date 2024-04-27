import { Router } from "express";
import verifyJwt from "../middlewares/auth.middleware.js";
import {
  createMenuItem,
  getMenuItems,
  getMenuItemsByCategory,
} from "../controllers/menuItme.controller.js";

const router = Router();

router.get("/", getMenuItems);
router.post("/", verifyJwt, createMenuItem);
router.get("/category/:id", getMenuItemsByCategory);

export default router;
