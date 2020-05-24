//Reading Sync
var fs = require('fs');

var data = fs.readFileSync('dummy.txt');
console.log(data); //it will print the byte of the text stored in dummy.txt  say ascii value