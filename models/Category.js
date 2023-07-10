import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    categoryName: String,
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", CategorySchema);

export default Category;
