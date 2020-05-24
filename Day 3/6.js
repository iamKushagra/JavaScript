//delete files using fs

var fs = require('fs');

fs.unlink('dummy1.txt',function(err){
    if(err) throw err;
    console.log('Files Deleted');
});