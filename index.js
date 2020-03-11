const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hellow from Knexpg');
})

app.listen('3000');