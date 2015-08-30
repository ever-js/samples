var Auth =  {
    getToken : function(token, cb) {
	   Dbh.Mongo.connect(function(err, db){
                db.collection(GlobalConfig.Common.mongo_collections.tokens)
                .findOne( {token : token},
                    function(err, document) {
                        cb(err, document ? true : false);
            });
        });	
    }
}

module.exports = Auth;