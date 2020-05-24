// Server Example
var http = require('http');
http.createServer(function(req,res){
    res.write('Hello World');
    res.end('\t hey world');

}).listen(5500);