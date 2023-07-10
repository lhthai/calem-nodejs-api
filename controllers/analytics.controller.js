import Order from "../models/Order.js";
import OrderDetail from "../models/OrderDetail.js";

export const getRevenue = async (req, res) => {
  let { fromDate, toDate } = req.params;
  try {
    const doc = await Order.aggregate([
      {
        $match: {
          orderDate: {
            $gte: new Date(fromDate),
            $lte: new Date(toDate),
          },
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$orderDate" } },
          revenue: { $sum: "$total" },
        },
      },
      { $sort: { _id: -1 } },
    ]);
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBestseller = async (req, res) => {
  let { fromDate, toDate } = req.params;
  try {
    let orders = await Order.find({
      orderDate: { $gte: fromDate, $lte: toDate },
    });

    let result = Promise.all(
      orders.map(async (order) => {
        let orderDetail = await OrderDetail.find({ orderID: order._id });
        return [...orderDetail];
      })
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
