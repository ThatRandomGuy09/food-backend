import express from "express";
import MenuItem from "../models/menuModal.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;