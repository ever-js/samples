var Products =  {
    getAllProducts : function(cb) {
	   Dbh.Mongo.connect(function(err, db){
                db.collection(GlobalConfig.Common.mongo_collections.producList).find({}).toArray(function(err, result) {
                    cb(err, result);
            });
        });	
    }
}

module.exports = Products;