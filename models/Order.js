import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customerName: String,
    address: String,
    phone: String,
    discountAmount: Number,
    shippingFee: Number,
    subTotal: Number,
    total: Number,
    orderDate: Date,
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);

export default Order;
