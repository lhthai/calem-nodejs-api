import Order from "../models/Order.js";
import OrderDetail from "../models/OrderDetail.js";

export const getOrders = async (req, res) => {
  try {
    const doc = await Order.find().sort({ orderDate: -1 });
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addOrder = async (req, res) => {
  try {
    let doc = new Order({
      customerName: req.body.customerName,
      address: req.body.address,
      phone: req.body.phone,
      discountAmount: req.body.discountAmount,
      shippingFee: req.body.shippingFee,
      subTotal: req.body.subTotal,
      total: req.body.total,
      orderDate: req.body.orderDate,
    });

    // Tạo order
    let result = await doc.save();

    // Tạo mảng để lưu thông tin order details
    let orderDetails = [];
    req.body.orderDetails.forEach((item) => {
      orderDetails.push(
        new OrderDetail({
          ...item,
          orderID: result._id,
        })
      );
    });

    // Insert order details vào db
    // console.log(orderDetails);
    await OrderDetail.insertMany(orderDetails);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOrder = async (req, res) => {
  try {
    // Update thông tin của order
    let doc = await Order.findByIdAndUpdate(req.params.id, req.body.order, {
      new: true,
    });

    // Xóa hết order details cũ
    await OrderDetail.deleteMany({ orderID: doc.id });

    // Add lại order details mới
    await OrderDetail.insertMany(req.body.orderDetails);
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
