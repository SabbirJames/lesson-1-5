const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('my name is sabbir james, i am a developer!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});