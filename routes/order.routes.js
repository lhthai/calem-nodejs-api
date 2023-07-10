import express from "express";
const router = express.Router();
import {
  getOrders,
  addOrder,
  updateOrder,
} from "../controllers/order.controller.js";

router.get("/", getOrders);
router.post("/", addOrder);
router.put("/:id", updateOrder);

export default router;
