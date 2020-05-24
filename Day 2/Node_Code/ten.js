
var http = require('http');
http.createServer(function(req,res){
    if(req.url == '/tyt'){
        res.writeHead(200,{'content-type' : 'text/html'});
        res.write('<html><body><p>This is the adminss page.</p></body></html>');
        res.end();
    }

}).listen(3000);