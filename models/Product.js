import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    productName: String,
    price: Number,
    cost: Number,
    categoryID: { type: mongoose.Types.ObjectId, ref: "Category" },
    categoryName: String,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
