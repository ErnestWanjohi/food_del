import foodModel from "../models/foodmodel.js";
import fs from "fs";
import express from "express";
const foodRouter = express.Router();

//all food list
foodRouter.get("/list", async (req, res) => {
  try {
    const food = await foodModel.find({});
    res.json({ success: true, food });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Food Error" });
  }
});
//get food by id

foodRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const food = await foodModel.findById(id);
    res.json({ success: true, food });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Food Error" });
  }
});

//remove food item
foodRouter.delete("/remove/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const food = await foodModel.findByIdAndDelete(id);
    res.json({ success: true, food });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Food Error" });
  }
});
//add food item

foodRouter.post("/add", async (req, res) => {
  const { name, description, price, image, category } = req.body;
  try {
    const food = new foodModel({
      name,
      description,
      price,
      image,
      category,
    });
    await food.save();
    res.json({ success: true, food });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Food Error" });
  }
});

export default foodRouter;
