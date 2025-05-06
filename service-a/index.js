const express = require('express');
const app = express();
const PORT = 3001;

const users = [
    { id: 1, name: 'tasnim' },
    { id: 2, name: 'tayssir'}
];

app.get('/users', (req, res) => res.json(users));

app.listen(PORT, () => console.log(`Service A running on port ${PORT}`));
