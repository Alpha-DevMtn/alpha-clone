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
        db.product.read_products_wommen([], function(err, results) {
            if (err) {
                console.error(err) 
                res.send(err)
            } else {
                res.send(results)
            }
        })
    }
}