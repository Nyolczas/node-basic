const http = require('http');
const { sum, sub } = require('./helpers');

const server = http.createServer((req, res) => {
    res.end('hello from node js');
});

server.listen(3000);

console.log(sum(259, 111), sub(259, 111));
