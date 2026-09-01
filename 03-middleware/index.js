const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

// Global Middleware
const logger = (req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
};

app.use(logger);

// Authentication Middleware
const checkAuth = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).send('No token, access denied');
    }

    console.log('Token found:', token);
    next();
};

// Home Route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// About Route
app.get('/about', (req, res) => {
    res.send('About Page');
});

// Protected Dashboard Route
app.get('/dashboard', checkAuth, (req, res) => {
    res.send('Welcome to Dashboard!');
});

// Server Start
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});