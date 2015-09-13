var rp = require('request-promise');

var HttpHandler = function(){
	var self = {};
	var pub = {};
	self.HTTP_METHODS = {
		GET : 'GET',
		DELETE : 'DELETE',
		PUT : 'PUT',
		POST : 'POST'
	}
	self.options = {
		resolveWithFullResponse: true
	};
	self.performRequest = function(method, url, customOptions) {
		var options = customOptions || {};
		
		_.extend(options, self.options);
		
		options.uri = url;
		options.method = method;
		return rp(options);
	}
	
	pub.get = function(url, options) {
		return self.performRequest(self.HTTP_METHODS.GET, url,  options);
	}
	
	pub.post = function(url, options) {
		return self.performRequest(self.HTTP_METHODS.POST, url,  options);
	}
	
	pub.del = function(url, options) {
		return self.performRequest(self.HTTP_METHODS.DELETE, url,  options);	
	}
	
	pub.put = function(url, options) {
		return self.performRequest(self.HTTP_METHODS.PUT, url,  options);	
	}
	
	pub.init = function(dependencies){
		self.dep = dependencies;
		self.dep.Logger.log("Initialzing Http Request Handler");
	}
	
	return pub;
};


module.exports = HttpHandler();
