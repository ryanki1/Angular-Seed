(function (ng, app) {
  "use strict";
  app.directive(
    "monitorMenuCollapse",
    function ($compile) {
      function Controller($scope, $element, $attrs) {
        $scope.menuHide = function () {
          debugger;
          //return { 'span1': true, 'accordion-body': true, 'collapse': true, 'in': false };
        }

        $scope.menuShow = function () {
          debugger;
          //return { 'span1': true, 'accordion-body': true, 'collapse': true, 'in': true };
        }
      }
      function link($scope, $element, $attrs, $controller) {
        debugger;
        $scope.$on("collapseMenu", function (event) {
          event.preventDefault();
          debugger;
          $scope.setMenuClassToCollapse();
        });

        $scope.setMenuClassToCollapse = function () {
          debugger;
          //$attrs.$set("ngClass", "menuHide()");
          //$element.attr("ng-class", "menuHide()");
          $element.attr("class", "span1 accordion-body collapse");
          //$scope.$apply(function () {
          //  debugger;
          //  $attrs.$set("ngClass", "menuHide()");
          //});
        }
      }
      return {
        controller: Controller,
        restrict: 'A',
        link: link
      }
    });
}(angular, magazineApp));