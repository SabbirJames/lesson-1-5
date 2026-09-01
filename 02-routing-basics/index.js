const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

// GET
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;

    res.send(`User ID is: ${userId}`);
});

// POST - Create
app.post('/users', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    res.send(`User created: ${name}, ${email}`);
});

// PUT - Update
app.put('/users', (req, res) => {
    res.send('User updated via PUT');
});

// DELETE
app.delete('/users', (req, res) => {
    res.send('User deleted via DELETE');
});

// Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});