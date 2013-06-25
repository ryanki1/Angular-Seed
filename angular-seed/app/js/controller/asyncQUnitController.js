(function (ng, app) {
  app.controller(
    "asyncQUnitController",
    function ($scope) {
      var self = this;
      self.testPresenceOf = function(item) {
        return item.length;
      }
      $scope.galleryItemTest = function (ele) {
        debugger;
        start();
        var outerHTML = angular.element(ele).parent();
        var galleryItem = outerHTML.find('img.gallery-item');
        ok(Boolean(self.testPresenceOf(galleryItem)) === true, "Gallery items found in test markup");
      }
      $scope.galleryViewerTest = function (ele) {
        debugger;
        start();
        var galleryViewer = angular.element(ele).find('#gallery');
        ok(Boolean(self.testPresenceOf(galleryViewer)) === true, "Gallery viewer found in test markup");
      }
      $scope.navigatorScrollDownTest = function (ele) {
        debugger;
        var scrollDownEle = angular.element(ele).find('#contentNavigationMenu a:last');
        angular.element(scrollDownEle).click();
        ok(angular.element('#content').scrollY > 0, "Content has been scrolled");
      }
    });
}(angular, magazineApp));