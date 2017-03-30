var db = require('./../massive');

module.exports = {

    getProducts: function(req, res) {
        db.product.read_products([], function(err, results) {
            if (err) {
                console.error(err)
                res.send(err)
            } else {
                res.send(results)
            }
        })
    },
    getOneProduct: function(req, res) {
        db.product.read_product([req.params.product_id],
        function(err, results) {
            if (err) {
                console.error(err)
                res.send(err)
            } else {
                results[0].sizes = results[0].sizes.split(',');
                if (results[0].info) {
                    results[0].info = results[0].info.split('+');
                }
                res.send(results[0])
            }
        })
    },
    getMensProducts: function(req, res) {
      console.log('men fired: ');
        db.product.read_products_men([], function(err, results) {
            if (err) {
                console.error(err)
                res.send(err)
            } else {
                res.send(results)
            }
        })
    },
    getMensProductsFiltered: function(req, res) {
      console.log('req.params.filter:', req.params.filter);
        db.product.read_mens_hoodies([req.params.filter],
        function(err, results) {
            if (err) {

                console.error(err)
                console.log('bad hoodie results: ', results);
                res.send(err)
              } else {
                console.log('good hoodie results: ', results);
                  res.send(results)
            }
        })
    },
    getWomensProducts: function(req, res) {
        db.product.read_products_women([], function(err, results) {
            if (err) {
                console.error(err)
                res.send(err)
            } else {
                res.send(results)
            }
        })
    },
    getCartItems: function(req, res) {

        db.products.find({'product_id': req.body.data},
        function(err, results) {
            if (err) {
                console.error(err)
                res.send(err)
            } else {
                res.send(results)
            }
        })
    }
}
