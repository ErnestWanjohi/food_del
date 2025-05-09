/*import express from "express";

import { addFood, listFood, removeFood } from "./foodcontroller.js";
import multer from "multer";

const foodRouter = express.Router();

//Image storage engine

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    //cb is for callback
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.de;

export default foodRouter;*/
