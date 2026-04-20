// Connect to catalogue database
db = db.getSiblingDB("catalogue");

// Drop existing collection (optional)
db.products.drop();

// Insert sample products
db.products.insertMany([
  {
    name: "Laptop",
    description: "High performance laptop",
    price: 55000,
    category: "electronics",
    image: "laptop.jpg"
  },
  {
    name: "Mobile Phone",
    description: "Latest smartphone",
    price: 20000,
    category: "electronics",
    image: "mobile.jpg"
  },
  {
    name: "Headphones",
    description: "Noise cancelling headphones",
    price: 3000,
    category: "accessories",
    image: "headphones.jpg"
  },
  {
    name: "Shoes",
    description: "Running shoes",
    price: 2500,
    category: "fashion",
    image: "shoes.jpg"
  }
]);

print("✅ Master data inserted successfully");