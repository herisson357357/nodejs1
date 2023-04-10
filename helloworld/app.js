'use strict';
const express = require('express');
const port = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
    res.send('Hello all\n');
});
app.get('/ready', (req, res) => res.status(200).json({ status: "ok"}));
app.get('/live', (req, res) => res.status(200).json({ status: "ok"}));

app.listen(port, HOST);
console.log(`Running on http://${HOST}:${port}`);