import express from "express";
const router = express.Router();
import {
  getRevenue,
  getBestseller,
} from "../controllers/analytics.controller.js";

router.get("/revenue/:fromDate/:toDate", getRevenue);
router.get("/bestseller/:fromDate/:toDate", getBestseller);

export default router;
