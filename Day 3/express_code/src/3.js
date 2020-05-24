var express = require('express');

var app = express();

app.get('',function(req,res){
    res.send('<h1>HELLO EXPRESS</h1>');
})

app.get('/help',function(req,res){
    res.send('<h1>This is help Page</h1>');
})

app.listen(3000,function(){
    console.log('Server has started on port 3000');
})