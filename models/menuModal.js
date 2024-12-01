import { Schema, model } from "mongoose";

const menuItemSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  type: { type: String, required: true },
  url: { type: String, required: true },
});

const MenuItem = model("MenuItem", menuItemSchema);

export default MenuItem;