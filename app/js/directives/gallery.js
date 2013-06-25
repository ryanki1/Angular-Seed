(function (ng, app) {
  app.directive(
    "galleryViewer",
    function () {
      function link($scope, $element, $attrs, $controller) {
        debugger;
        if ($attrs.qunitcb) {
          $scope[$attrs.qunitcb].apply(this, $element);
          return;
        }
      }
      return {
        restrict: "A",
        transclude: true,
        replace: true,
        templateUrl: '/angular-seed/app/template/directive/gallery.html',
        link: link
      }
    });
}(angular, magazineApp))