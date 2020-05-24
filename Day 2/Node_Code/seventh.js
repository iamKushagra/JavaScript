//Server program with an http header and html content
var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type' : 'text/html'});
    res.write('hello world');
    res.end();
}).listen(3000);