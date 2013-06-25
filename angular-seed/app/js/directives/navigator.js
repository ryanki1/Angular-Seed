(function (ng, app) {
  "use strict";
  app.directive(
    "pageNavigator",
    function (magazineContent, $compile, $window) {
      function Controller($scope, $element, $attrs) {

        $scope.scrollLeft = function () {
          debugger;
          var bookmark = parseInt($attrs.bookmark);
          var bookmarkLeftId = (bookmark === 0) ? 0 : bookmark - 1;
          $scope.setBookmark(bookmarkLeftId);
        }
      
        $scope.scrollRight = function () {
          debugger;
          var bookmark = parseInt($attrs.bookmark);
          var indexLength = $($attrs.indexid + " li").length-1;
          var bookmarkRightId = (bookmark === indexLength) ? indexLength : bookmark + 1;
          $scope.setBookmark(bookmarkRightId);
        }

        $scope.scrollUp = function () {
          event.preventDefault();
          $window.scrollTo(0, -$window.innerHeight);
        }

        $scope.scrollDown = function () {
          debugger;
          event.preventDefault();
          $window.scrollTo(0, $window.innerHeight);
          //$window.scrollTo({ top: "100%", left: "0%" }, 3000);
          //angular.element("#content").stop().scrollTo({ top: "100%", left: "0%" }, 1000);
        }

        $scope.$on("setBookmark", function (event, bookmarkId) {
          event.preventDefault();
          debugger;
          $scope.setBookmark(bookmarkId);
        });

        $scope.setBookmark = function (bookmarkId)
        {
          $attrs.$set("bookmark", bookmarkId);
        }
      }

      function link($scope, $element, $attrs, $controller) {

        if ($attrs.qunitcb) {
          $scope[$attrs.qunitcb].apply(this, $element);
          return;
        }

        debugger;
        function andHangOn (data) {
          debugger;
          var hook = angular.element($attrs.contentid);
          hook.html($compile(data)($scope));
        }

        $attrs.$observe("bookmark", function (index) {
          debugger;
          // Update content
          var contentPanelForUpdate;
          var urlContent = angular.element($attrs.indexid + " li:eq(" + index + ") a").attr("page");
          magazineContent.fetchContentFrom(urlContent, andHangOn);
        });
      }
      return {
        controller: Controller,
        restrict: 'E',
        link: link,
        templateUrl: '/angular-seed/app/template/directive/navigator.html',
        replace: false
      }
    });
}(angular, magazineApp));