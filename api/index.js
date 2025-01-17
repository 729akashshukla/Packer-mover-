import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
// import relocationRouter from './routes/relocation.route.js';
import rRouter from "./routes/relocation.route.js";
import itemRouter from "./routes/item.route.js";
import bookingRouter from "./routes/booking.route.js";
import path from "path";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("mongodb is connected"))
  .catch((err) => console.log(err));

const __dirname = path.resolve();

const app = express();

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/r", rRouter);
app.use("/api/item", itemRouter);
app.use("/api/booking", bookingRouter);
app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(8000, () => {
  console.log("server is running on port 8000 ");
});
