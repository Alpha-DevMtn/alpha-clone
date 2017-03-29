var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var config = require('./config');

var stripe = require('stripe')(config.STRIPE_KEYS.secretKey);

var app = module.exports = express();

app.use(bodyParser.json());

var db = require('./massive');




var productCtrl = require('./controllers/productCtrl');


app.post('/api/payment', function(req, res, next){
  console.log(req.body);

  //convert amount to pennies
  const chargeAmt = req.body.amount;
  const amountArray = chargeAmt.toString().split('');
  const pennies = [];
  for (var i = 0; i < amountArray.length; i++) {
    if(amountArray[i] === ".") {
      if (typeof amountArray[i + 1] === "string") {
        pennies.push(amountArray[i + 1]);
      } else {
        pennies.push("0");
      }
      if (typeof amountArray[i + 2] === "string") {
        pennies.push(amountArray[i + 2]);
      } else {
        pennies.push("0");
      }
    	break;
    } else {
    	pennies.push(amountArray[i])
    }
  }
  const convertedAmt = parseInt(pennies.join(''));
  console.log("Pennies: ");
  console.log(convertedAmt);

  const charge = stripe.charges.create({
  amount: convertedAmt, // amount in cents, again
  currency: 'usd',
  source: req.body.payment.token,
  description: 'Test charge from grahms repo'
}, function(err, charge) {
     res.sendStatus(200);
  // if (err && err.type === 'StripeCardError') {
  //   // The card has been declined
  // }
});
});


app.get('/api/products', productCtrl.getProducts);
app.get('/api/products/:product_id', productCtrl.getOneProduct);
app.get('/api/products/gender/men', productCtrl.getMensProducts);
app.get('/api/products/gender/women', productCtrl.getWomensProducts);
app.get('/api/products/type/hoodies', productCtrl.getMensHoodies);
app.post('/api/cart', productCtrl.getCartItems);


var port = 4000;
app.listen(port, function() {
    console.log('listening on port ', port);
});
