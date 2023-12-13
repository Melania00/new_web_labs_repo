const express = require('express');
const cors = require('cors');
const DataStore = require('js-data');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

// Define Fridge model with properties and ID generation
const store = new DataStore();
const Fridge = store.define('Fridge', {
  id: {
    type: String,
    default: uuidv4,
  },
  name: String,
  brand: String,
  color: String,
  price: Number,
});

// Pre-populate with some initial data (optional)
const initialFridges = [
  { name: 'Samsung RF28H5000SG', brand: 'Samsung', color: 'Stainless Steel', price: 1599 },
  { name: 'LG LFXS30766S/S', brand: 'LG', color: 'Black Stainless Steel', price: 2499 },
];

Fridge.create(initialFridges)
  .then(() => console.log('Initial fridges added'))
  .catch((error) => console.error(error));

// Get all fridges
app.get('/fridges', async (req, res) => {
  try {
    const fridges = await Fridge.findAll();
    res.json(fridges);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific fridge
app.get('/fridges/:id', async (req, res) => {
  try {
    const fridge = await Fridge.findById(req.params.id);
    if (!fridge) {
      return res.status(404).json({ message: 'Fridge not found' });
    }
    res.json(fridge);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new fridge
app.post('/fridges', async (req, res) => {
  try {
    const newFridge = await Fridge.create(req.body);
    res.status(201).json(newFridge);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a specific fridge
app.put('/fridges/:id', async (req, res) => {
  try {
    const updatedFridge = await Fridge.updateById(req.params.id, req.body);
    if (!updatedFridge) {
      return res.status(404).json({ message: 'Fridge not found' });
    }
    res.json(updatedFridge);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a specific fridge
app.delete('/fridges/:id', async (req, res) => {
  try {
    await Fridge.deleteById(req.params.id);
    res.status(204).send(); // No content response
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
