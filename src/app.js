const express = require('express');
const randomHex = require('./helpers/random-hex');

const app = express();

app.get('/colors', (req, res) => {
    const count = req.query.count || 1;
    const colors = [];

    for (i = 0; i < count; i += 1) {
        colors.push({ value: randomHex() })
    }

    res.status(200).json({ colors })
});

module.exports = app;
