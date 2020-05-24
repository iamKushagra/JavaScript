var fs = require('fs');

var buf = fs.readFileSync('json.json')
var data = buf.toString();
var dataJSON = JSON.parse(data);

dataJSON.MobileNumber = 1234;
dataJSON.Hobby = "Chess"

var userJSON = JSON.stringify(dataJSON); //converts Javascript object/value to JSON String

fs.writeFileSync('json.json', userJSON);

console.log(buf);
console.log(data);
console.log(dataJSON);
console.log(dataJSON.firstName);
console.log(dataJSON.MobileNumber);



