import express from "express";
const router = express.Router();
import {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller.js";

router.get("/", getCategories);
router.post("/", addCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;
