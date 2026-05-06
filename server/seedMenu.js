import mongoose from "mongoose";
import dotenv from "dotenv";
import MenuItem from "./models/MenuItem.js";

dotenv.config();

const menuItems = [
  {
    name: "Grandma Pizza",
    desc: "Fresh mozzarella, rich tomato sauce, garlic, basil, and a crispy thin crust.",
    price: 12,
    image: "/images/pizza1.png",
  },
  {
    name: "Neapolitan-Style Pizza",
    desc: "San Marzano tomato sauce, fresh mozzarella, basil, and a soft wood-fired crust.",
    price: 14,
    image: "/images/pizza2.png",
  },
  {
    name: "Sicilian Pizza",
    desc: "Thick, fluffy crust, topped with tomato sauce, mozzarella, olive oil, and herbs.",
    price: 15,
    image: "/images/pizza3.png",
  },
  {
    name: "Roman-Style Pizza",
    desc: "Crispy thin crust, with tomato sauce, mozzarella, oregano, and a light cheesy finish.",
    price: 13,
    image: "/images/pizza4.png",
  },
  {
    name: "Quad City-Style Pizza",
    desc: "Spicy tomato sauce, mozzarella, Italian sausage, and a hand-tossed malt crust.",
    price: 16,
    image: "/images/pizza5.png",
  },
  {
    name: "California-Style Pizza",
    desc: "Mozzarella, grilled chicken, arugula, fresh vegetables, and a light garlic olive oil base.",
    price: 14,
    image: "/images/pizza6.png",
  },
];

await mongoose.connect(process.env.MONGO_URI);

await MenuItem.deleteMany();
await MenuItem.insertMany(menuItems);

console.log("Menu seeded successfully");
process.exit();