var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Hello world!");
});

app.get('/create', function(req, res){
    res.send("Hello world!");
});

app.get('/search', function(req, res){
    res.send("Hello world!");
});

app.listen(3000);