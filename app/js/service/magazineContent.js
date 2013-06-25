(function (ng, app) {
  'use strict';
  app.factory(
    "magazineContent",
    function ($http, $log) {
      return {
        fetchContentFrom: function (urlContent, successCB) {
          $http({ method: 'GET', url: urlContent }).
            success(function (data, status, headers, config) {
              debugger;
              successCB(data);
            }).
            error(function (data, status, headers, config) {
              debugger;
              $log.warn(data, status, headers, config);
            })
        }
      }
    });
}(angular, magazineApp));
