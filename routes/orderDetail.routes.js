import express from "express";
const router = express.Router();
import { getOrderDetails } from "../controllers/orderDetail.controller.js";

router.get("/:orderID", getOrderDetails);

export default router;
