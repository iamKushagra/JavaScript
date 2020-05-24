var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type' : 'text/html'});
    res.write('<html><body><p>This is the admin page.</p></body></html>');
    res.end();
}).listen(3000);