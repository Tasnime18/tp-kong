// service-a/index.js
const express = require('express');
const app = express();
const PORT = 3001;

// Données factices des utilisateurs
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

// Endpoint racine
app.get('/', (req, res) => res.json(users));

app.listen(PORT, () => console.log(`Service A running on :${PORT}`));
