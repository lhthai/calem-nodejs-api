import OrderDetail from "../models/OrderDetail.js";

export const getOrderDetails = async (req, res) => {
  try {
    const doc = await OrderDetail.find({ orderID: req.params.orderID });
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
