import {blockChain} from './Blockchain.js';
import {Block} from './Blockchain.js';
var express = require('express');
var app = express();
let podChain = new blockChain();

app.get('/', function(req, res){
    res.send("Hello world!");
});

app.get('/purchase', function(req, res){
    podChain.addBlock(new Block(this.getLatestBlock().index + 1, Date(), res.body.price));
    res.send("Hello world!");
});

app.get('/searchID', function(req, res){
    res.send("Hello world!");
});

app.get('/searchDates', function(req, res){
    res.send("Hello world!");
});

app.listen(3000);