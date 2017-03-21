var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var config = require('./config');

const stripe = require('stripe')(config.STRIPE_KEYS.secretKey);

var app = module.exports = express();

app.use(bodyParser.json());

var db = require('./massive');




var productCtrl = require('./controllers/productCtrl');

app.get('/api/products', productCtrl.getProducts);
app.get('/api/products/:product_id', productCtrl.getOneProduct);
app.get('/api/products/gender/men', productCtrl.getMensProducts);
app.get('/api/products/gender/women', productCtrl.getWomensProducts);
app.post('/api/cart', productCtrl.getCartItems);


var port = 4000;
app.listen(port, function() {
    console.log('listening on port ', port);
});
