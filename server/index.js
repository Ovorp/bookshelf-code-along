const express = require('express');
const bc = require('./controllers/books_controller');
const app = express();

const PORT = 4000;
// top level middleware
app.use(express.json());

// get endpoints
app.get('/api/books', bc.read);

// post endpoints
app.post('/api/books', bc.create);

// put endpoints
app.put('/api/books/:id', bc.update);

// delete endpoints
app.delete('/api/books/:id', bc.delete);

app.listen(PORT, console.log(`Running on port ${PORT}`));
