//Events Demonstration
var fs = require('fs');
var rs = fs.createReadStream('./dummy.txt');
rs.on('open', function(){
    console.log('event triggrered');
});

rs.on('data', function (chunk) { 
    console.log(chunk.toString()); 
}); 