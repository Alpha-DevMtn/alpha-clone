var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var config = require('./config');

var app = module.exports = express();

app.use(express.static(__dirname + './../public'));
app.use(bodyParser.json());

var db = require('./massive');


var productCtrl = require('./controllers/productCtrl');

app.get('/api/products', productCtrl.getProducts);
app.get('/api/products/:product_id', productCtrl.getOneProduct);
app.get('/api/products/men', productCtrl.getMensProducts);
app.get('/api/products/women', productCtrl.getWomensProducts);


var port = 3000;
app.listen(port, function() {
    console.log('listening on port ', port);
});