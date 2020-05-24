var http = require('http');
var dt = require('./module.js');

http.createServer(function (req, res) {
    console.log(third.xy);
    res.end('Server is Responding');
}).listen(3000);