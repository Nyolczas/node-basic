// const http = require('http');
// const { sum, sub } = require('./helpers');

// const server = http.createServer((req, res) => {
//     res.end('pina from node js');
// });

// server.listen(3000);

// console.log(sum(259, 111), sub(259, 111));

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("express pina");
})

app.listen(3000);