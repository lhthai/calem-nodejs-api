import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import path from "path";
import categoryRoutes from "./routes/category.routes.js";
import productRoutes from "./routes/product.routes.js";
import orderRoutes from "./routes/order.routes.js";
import orderDetailRoutes from "./routes/orderDetail.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js";

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/orderDetails", orderDetailRoutes);
app.use("/api/analytics", analyticsRoutes);

// app.use(express.static(path.join(__dirname, "./client/build")));
// app.get("*", (_, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index/html"), (err) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(async () => {
    app.listen(PORT, () => console.log(`Server port: ${PORT}`));
  })
  .catch((err) => console.log(err));
