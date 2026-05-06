import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  name: String,
  desc: String,
  price: Number,
  image: String,
});

export default mongoose.model("MenuItem", menuItemSchema);