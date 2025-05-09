import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number },
  image: { type: String },
  category: { type: String },
});

foodSchema.set("toJSON", {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

const foodModel = mongoose.model.food || mongoose.model("food", foodSchema);

export default foodModel;
