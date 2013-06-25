(function (ng, app) {
  app.directive(
    "galleryItem", 
    function () {

      function getFileNameAsTitle(url) {
        return url.substring(url.lastIndexOf('/') + 1).split('.')[0]
      }

      function link($scope, $element, $attrs, $controller) {
        debugger;
        if ($attrs.qunitcb) {
          var isolatedScopeParentScopeFunction = $scope.qunitcb();
          isolatedScopeParentScopeFunction.apply(this, $element);
          return;
        }
        $scope.fullyQualifiedPictureFileName = angular.element($element).attr('src');
        $scope.title = angular.element($element).attr('title');
        var resolveTitleIfPresent = $scope.title.split('{{')[0]
        if (!resolveTitleIfPresent) {
          $scope.title = getFileNameAsTitle($scope.fullyQualifiedPictureFileName);
        }
        else {
          $scope.title = resolveTitleIfPresent;
        }
      }
      return {
        restrict: "E",
        link: link,
        replace: true,
        scope: {
          qunitcb: "&"
        },
        template: "<img class='gallery-item' data-href='{{fullyQualifiedPictureFileName}}' title='{{title}}' data-gallery='gallery' />"
      }
    });
}(angular, magazineApp))