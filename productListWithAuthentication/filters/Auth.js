var Auth = {
	tokenAuthentication : function(req, res, next) {
		var authHeader = req.authorization;
		var statusCode = 401;
		var output = {
			msg : GlobalConfig.Common.msgs.error.err401
		};
		if(_.isEmpty(authHeader)) {
			res.send(statusCode, output);
		} else {
			Lib.Auth.getToken(authHeader.credentials, function(err, isAuthenticated){
				if(err) {
					res.send(500, {
							msg : GlobalConfig.Common.msgs.error.err500
						});
				} else if(false == isAuthenticated) {
					res.send(statusCode, output);
				} else {
					next();
				}
			})
		}
	}	
}

module.exports = Auth;
