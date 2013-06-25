'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('magazineApp.services', ["$scope","$location","$http","$directives","$browser"]).
  value('version', '0.1');
