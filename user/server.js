const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Mongo Connection
const MONGO_URL = process.env.MONGO_URL || "mongodb://mongo:27017/users";

mongoose.connect(MONGO_URL)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ DB Error:", err));

// User Schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

const User = mongoose.model("User", userSchema);

// Register API
app.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({ message: "User Registered" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login API
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Health check
app.get("/health", (req, res) => {
  res.send("User service running");
});

// Start server
app.listen(8081, () => {
  console.log("🚀 User service running on port 8081");
});