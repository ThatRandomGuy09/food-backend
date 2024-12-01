import mongoose from "mongoose";
import dotenv from "dotenv";
import MenuItem from "./models/menuModal.js";

dotenv.config();

const seedData = [
  {
    id: 1,
    title: "Royal Cheese Burger with extra Fries",
    description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
    price: "₹120",
    type: "burger",
    url: "https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769622/burger-coke_lzbdmb.png",
  },
  {
    id  :2,
    title: "Vegan Meal Special",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    price: "₹120",
    type: "burger",
    url: "https://res.cloudinary.com/ddfqil3l6/image/upload/v1732774648/burger-2_sh9jxy.png",
  },
  {
    id: 3,
    title: "The classics for 3",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    price: "₹120",
    type: "burger",
    url: "https://res.cloudinary.com/ddfqil3l6/image/upload/v1732774666/burger-3_nopg2s.png",
  },
  {
    id: 4,
    title: "The classics for 3",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    price: "₹120",
    type: "burger",
    url: "https://res.cloudinary.com/ddfqil3l6/image/upload/v1732774695/burger-4_chvb9d.png",
  },

  {
    id: 5,
    title: "Royal Cheese Burger with extra Fries",
    description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
    price: "₹70",
    type: "fries",
    url: "https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769657/fries1_lptoow.png",
  },
  {
    id: 6,
    title: "The classics for 3",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    price: "₹70",
    type: "fries",
    url: "https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769659/fries2_dyf0vr.png",
  },
  {
    id: 7,
    title: "Extra Large Fries Special",
    description: "1 McChicken™, 1 Royal Cheeseburger, 3 large Fries",
    price: "₹70",
    type: "fries",
    url: "https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769660/fries3_kifb6e.png",
  },
  {
    id: 8,
    title: "Large Fries Combo",
    description: "1 Big Mac™, 2 large Fries, 2 Coke Zero™",
    price: "₹70",
    type: "fries",
    url: "https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769662/fries4_pdj3ff.png",
  },

  { id:9,
    title: "Royal Cheese Burger with extra Fries",
    description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
    price: "₹40",
    type: "drinks",
    url: "https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769643/drink1_a854nc.png",
  },
  {
    id: 10,
    title: "The classics for 3",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    price: "₹40",
    type: "drinks",
    url: "https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769645/drink2_jrfjxw.png",
  },
  {
    id: 11,
    title: "The classics for 3",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    price: "₹40",
    type: "drinks",
    url: "https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769646/drink3_afbsrn.png",
  },
  {
    id: 12,
    title: "The classics for 3",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    price: "₹40",
    type: "drinks",
    url: "https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769648/drink4_qxvudj.png",
  },
];

async function seedDatabase() {
  try {
    const mongoUrl = process.env.MONGODB_URI;
    if (!mongoUrl) {
      throw new Error("MongoDB URL is not defined in the .env file");
    }
    await mongoose.connect(mongoUrl);

    console.log("Connected to MongoDB!");

    await MenuItem.insertMany(seedData);
    console.log("Database seeded successfully!");

    mongoose.disconnect();
  } catch (error) {
    console.error("Error seeding the database:", error);
  }
}

seedDatabase();