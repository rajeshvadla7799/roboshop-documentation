const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
const MONGO_URL = process.env.MONGO_URL || "mongodb://mongo:27017/cart";

mongoose.connect(MONGO_URL)
  .then(() => console.log("✅ Mongo Connected"))
  .catch(err => console.log("❌ DB Error:", err));

// Cart Schema
const cartSchema = new mongoose.Schema({
  username: String,
  product: String,
  price: Number,
  quantity: Number
});

const Cart = mongoose.model("Cart", cartSchema);

// ➕ Add to Cart
app.post("/add", async (req, res) => {
  try {
    const item = new Cart(req.body);
    await item.save();
    res.json({ message: "Item added to cart" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📦 Get Cart Items
app.get("/:username", async (req, res) => {
  try {
    const items = await Cart.find({ username: req.params.username });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ❌ Clear Cart
app.delete("/:username", async (req, res) => {
  try {
    await Cart.deleteMany({ username: req.params.username });
    res.json({ message: "Cart cleared" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Health Check
app.get("/health", (req, res) => {
  res.send("Cart service running");
});

app.listen(8082, () => {
  console.log("🚀 Cart service running on port 8082");
});