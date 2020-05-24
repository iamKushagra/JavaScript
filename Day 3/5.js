//write file with fs
var fs = require('fs');

fs.writeFile('dummy1.txt','Writing file',function(err){
    if(err) throw err;
    console.log('Content written');
});
