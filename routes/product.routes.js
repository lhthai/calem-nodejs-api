import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductsByCategory,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

router.get("/", getProducts);
router.get("/:categoryID", getProductsByCategory);
router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
