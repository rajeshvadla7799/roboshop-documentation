const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// 🔹 MongoDB Connection
const MONGO_URL = process.env.MONGO_URL || "mongodb://mongo:27017/catalogue";

mongoose.connect(MONGO_URL)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Error:", err));

// 🔹 Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  image: String
});

const Product = mongoose.model("Product", productSchema);

// 🔹 Routes

// Health check
app.get("/health", (req, res) => {
  res.send("Catalogue service is running");
});

// Get all products
app.get("/products", async (req, res) => {
  try {
    const data = await Product.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add product
app.post("/products", async (req, res) => {
  try {
    const product = new Product(req.body);
    const saved = await product.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Start Server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`🚀 Catalogue running on port ${PORT}`);
});