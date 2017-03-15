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
                results[0].info = results[0].info.split('+');
                res.send(results[0])
            }
        })
    },
    getMensProducts: function(req, res) {
        db.product.read_products_men([], function(err, results) {
            if (err) {
                console.error(err) 
                res.send(err)
            } else {
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
    }
}