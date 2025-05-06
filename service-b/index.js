// service-b/index.js
const express = require('express');
const app = express();
const PORT = 3002;

// Données factices des produits
const products = [
  { id: 1, name: 'Laptop' },
  { id: 2, name: 'Phone' }
];

// Endpoint /products
app.get('/products', (req, res) => res.json(products));

app.listen(PORT, () => console.log(`Service B running on :${PORT}`));
