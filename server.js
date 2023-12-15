const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
import imageUrl from "./src/catalog-fridge.jpg";

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Initial Fridge Data
const fridges = [
  {
    id: 1,
    name: "Fridge 1",
    brand: "Samsung",
    price: 25,
    imageUrl,
    description: "Description for Fridge 1",
  },

  {
    id: 2,
    name: "Fridge 2",
    brand: "LG",
    price: 20,
    imageUrl,
    description: "Description for Fridge 2",
  },
  {
    id: 3,
    name: "Fridge 3",
    brand: "LG",
    price: 38,
    imageUrl,
    description: "Description for Fridge 3",
  },
  {
    id: 4,
    name: "Fridge 4",
    brand: "Samsung",
    price: 17,
    imageUrl,
    description: "Description for Fridge 4",
  },
];

// GET /fridges
app.get("/fridges", async (req, res) => {
  const brands = req.query.brands ? req.query.brands.split(",") : [];
  const priceFrom = parseFloat(req.query.priceFrom) || undefined;
  const priceTo = parseFloat(req.query.priceTo) || undefined;
  const searchTerm = req.query.searchTerm || "";
  const itemId = parseInt(req.params.id);
  const foundItem = fridges.find((fridge) => fridge.id === itemId);

  let results = [...fridges];

  if (brands.length) {
    results = results.filter((fridge) => brands.includes(fridge.brand));
  }

  if (priceFrom) {
    results = results.filter((fridge) => fridge.price >= priceFrom);
  }

  if (priceTo) {
    results = results.filter((fridge) => fridge.price <= priceTo);
  }

  if (searchTerm) {
    // Simulate full-text search (replace with actual implementation)
    results = results.filter(
      (fridge) =>
        fridge.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        fridge.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        fridge.description.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }

  if (foundItem) {
    res.json(foundItem);
  } else {
    res.status(404).json({ error: "Item not found" });
  } 

  res.json(results);
});


// GET /brands
app.get("/brands", async (req, res) => {
  const brands = [...new Set(fridges.map((fridge) => fridge.brand))];
  res.json(brands);
});


app.listen(5000, () => console.log("Server listening on port 5000"));
