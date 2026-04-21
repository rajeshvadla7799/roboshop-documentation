db = db.getSiblingDB('catalogue');

// Drop existing collection
db.products.drop();

// Insert RoboShop catalogue data
db.products.insertMany([
  {
    "_id": "5b6c6a7b01",
    "name": "Laptop",
    "description": "High performance laptop",
    "image": "laptop.jpg",
    "price": 55000,
    "category": "electronics"
  },
  {
    "_id": "5b6c6a7b02",
    "name": "Mobile",
    "description": "Latest smartphone",
    "image": "mobile.jpg",
    "price": 20000,
    "category": "electronics"
  },
  {
    "_id": "5b6c6a7b03",
    "name": "Shoes",
    "description": "Comfortable running shoes",
    "image": "shoes.jpg",
    "price": 3000,
    "category": "fashion"
  },
  {
    "_id": "5b6c6a7b04",
    "name": "Watch",
    "description": "Smart watch",
    "image": "watch.jpg",
    "price": 5000,
    "category": "electronics"
  }
]);

print("✅ RoboShop catalogue data loaded");