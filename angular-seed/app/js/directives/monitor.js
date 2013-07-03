(function (ng, app) {
  "use strict";
  app.directive(
    "monitorEvents",
    function($rootScope) {
      function link($scope, $element, $attrs, $controller) {

        function handleMonitorEventsClick(event) {
          event.stopPropagation();
          event.preventDefault();
          debugger;
          var positionWithinContentIndex = angular.element("#index li").index($element);
          angular.element("#guidelineNavigator").attr('bookmark', positionWithinContentIndex);
          $rootScope.$broadcast('setBookmark', positionWithinContentIndex);
        }
        debugger;
        $element.on("click.monitorEvents", handleMonitorEventsClick);
      }
      return {
        restrict: "A",
        link: link
      }
    }
  );
}(angular, magazineApp));