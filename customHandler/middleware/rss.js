/**
 * Created by ruwang on 7/8/15.
 */
var rss = {
    
    geNews: function (req, res, next) {

		var response = Dbh.HttpRequest.get(req.params.url);
		response
		.then(function(result){
			res.send(500, JSON.parse(result.body));
		})
		.catch(function(error){
			res.send(500, {
					msg : GlobalConfig.Common.msgs.error.err500
				}
			);
		});
     }
}
module.exports = rss;