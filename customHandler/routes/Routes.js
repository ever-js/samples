'use strict'
var _ = require("lodash");
module.exports = {

    printItem : function(collection, log) {
      _.each(collection, function(routes){
        log("\tRoute -> " + routes.config.path);
      });
    },
    printRoutes : function(routeObject, log) {

      log("------------------------------");
      log("GET : ");
      this.printItem(routeObject.GET, log);
      log("------------------------------");
      log("POST : ");
      this.printItem(routeObject.POST, log);
      log("------------------------------");
      log("PUT : ");
      this.printItem(routeObject.PUT, log);
      log("------------------------------");
      log("DELETE : ");
      this.printItem(routeObject.DELETE, log);
      log("------------------------------");

    },

    getRoutes : function(dependencies) {

        var userFilters = dependencies.UserFilters;
        var userMiddleware = dependencies.userMiddleWare;
        var log =dependencies.log;

        var routes = {

            //Add routes here. as shown in the sample

            GET: [
                {
                    config: {
                        path: '/get-weather',
                        isSecure: false
                    },
                    method: userMiddleware.rss.geNews,
                    filters: []
                }
            ],
            POST: [],
            PUT: [],
            DELETE: []
        };

        this.printRoutes(routes, log);
        return routes;
    }
}