//Routing in server based on different url (string query)
var http = require('http');
http.createServer(function(req,res){
if(req.url == '/'){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('<html><body><p>This is the Homepage Page.</p></body></html>');
    res.end();
}
else if( req.url == '/student'){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('<html><body><p>This is the student Page.</p></body></html>');
    res.end();
}

else if( req.url == '/teacher'){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('<html><body><p>This is the teacher Page.</p></body></html>');
    res.end();
}
else if(req.url == '/admin'){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('<html><body><p>This is the admin Page.</p></body></html>');
    res.end();
}
else{
    res.end('Invalid url request');
}

}).listen(3000);
