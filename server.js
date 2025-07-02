const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000; // Mantén este puerto, es el que usaremos.

app.use(express.static(path.join(__dirname, 'public')));

// Si decides usar cors:
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});