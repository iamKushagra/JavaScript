var http = require('http');
var dt = require('./localmodule.js');


http.createServer(function (req, res) {
    // console.log(dt.dateTime);
   //console.log(third.xy);
    //
    res.write(dt.xyz);
}).listen(3000);