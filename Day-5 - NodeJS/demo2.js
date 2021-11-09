
var http = require('http');

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello Bijin! Welcome to the world of JS.');

  }).listen(8080);
