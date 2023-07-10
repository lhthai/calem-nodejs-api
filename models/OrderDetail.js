import mongoose from "mongoose";

const OrderDetailSchema = new mongoose.Schema(
  {
    orderID: { type: mongoose.Types.ObjectId, ref: "Order" },
    productID: { type: mongoose.Types.ObjectId, ref: "Product" },
    productName: String,
    categoryID: { type: mongoose.Types.ObjectId, ref: "Category" },
    categoryName: String,
    price: Number,
    quantity: Number,
  },
  { timestamps: true }
);

const OrderDetail = mongoose.model("OrderDetail", OrderDetailSchema);

export default OrderDetail;
