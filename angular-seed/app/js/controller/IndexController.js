(function (ng, app) {
  "use strict";
  app.controller( "IndexController",
  function ($scope) {
    $scope.getIndex = {"index": [{ "element": "A", "steps": ["A.1", "A.2", "A.3", "A.4"] },
                    { "element": "B", "steps": ["B.1", "B.2"] }
        ]
    }

    $scope.collapseMenu = function () {
      debugger;
      var classes = angular.element("#elementListCollapse").attr("ng-class");
      classes.in = false;
      angular.element("#elementListCollapse").attr("ng-class", classes);
      $scope.$apply();
    }

    $scope.clickStepA1 = function () {
      debugger;
      angular.element('#elementList li:eq(1)').click();
    }
  });
}(angular, magazineApp));