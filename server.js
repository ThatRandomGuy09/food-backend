import { config } from "dotenv";
import cors from "cors";
import express from "express";
import authRoutes from "./routes/authRoutes.js";
import menuRoutes from "./routes/menuRoute.js";
import connectDB from "./config/db.js";

config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
