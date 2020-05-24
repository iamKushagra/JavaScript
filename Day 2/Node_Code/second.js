var http = require('http');

http.createServer(function (req, res) {
    console.log("this is hello world! (inside code block)");
    res.end('Server is Responding');
}).listen(3000);
console.log("Hello world!"); //because it is asynchronous so it does not wait for call back