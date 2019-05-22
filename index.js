/*jshint esversion: 6 */
const express = require('express');
const fortunes = require('./data/fortunes')

const port = 5000;

const app = express();

app.get('/fortunes', (req, res) => {
    res.json(fortunes);
});

app.listen(port, () => console.log(`listening on port ${port}`));