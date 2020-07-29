const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello world node');
});

server.listen(3000);
