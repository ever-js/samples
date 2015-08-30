var Products = {
    getProducts: function (req, res, next) {
		try {
			Lib.Products.getAllProducts(function(err, products){
				var statusCode = 200;
				var output = null;
				if(err) {
					statusCode = 500;
					output = {
						msg : GlobalConfig.Common.msgs.error.err500
					};
				} else if(false == _.isEmpty(products)) {
					output = {
						data :  products
					};				
				} else {
					output = {
						msg : GlobalConfig.Common.msgs.error.err404
					};
				}
				res.send(statusCode, output);
			});
			
		} catch(err) {
        	res.send(500, {
					msg : GlobalConfig.Common.msgs.error.err500
				}
			);
		}}
}

module.exports = Products;