import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import foodRouter from "./routes/foodroute.js";

//app config
const app = express();
app.use(express.json());

//middleware
app.use(express.json());
app.use(cors());

const MONGODB = process.env.MONGODB;
const PORT = process.env.PORT;
//db connection
mongoose
  .connect(MONGODB)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
// api endpoint
app.use("/api", foodRouter);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
