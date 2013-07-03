(function (ng, app) {
  "use strict";
  app.directive(
    "pageNavigator",
    function (magazineContent, $compile, $window) {
      function Controller($scope, $element, $attrs) {

        var isScrollingUp = function (deltaPxShift) {
          return deltaPxShift < 0;
        }

        var tryCancelScrollInterval = function (deltaPxShift, nextDeltaStopPx, endPx, intervalId) {
          if (isScrollingUp(deltaPxShift)) {
            if (nextDeltaStopPx < endPx) {
              $window.clearInterval(intervalId);
            }
          }
          else {
            if (nextDeltaStopPx > endPx) {
              $window.clearInterval(intervalId);
            }
          }
        }

        var scrollWindowByDelta = function (startPxDelta, endPxDelta) {
          debugger;
          $window.scrollTo(startPxDelta, endPxDelta);
        }

        var scrollWindowBy = function (heightPx, durationMiliSec, deltaPxShift) {
          debugger;
          var startPx = $window.scrollY;
          var endPx = $window.scrollY + heightPx;
          var deltaIntervalMiliSec = Math.abs(durationMiliSec / heightPx * deltaPxShift);
          var nextStartPx = startPx;
          var nextStopPx = startPx + deltaPxShift;
          var intervalId;
          intervalId = $window.setInterval(function () {
            scrollWindowByDelta(nextStartPx, nextStopPx);
            nextStartPx = nextStopPx;
            nextStopPx = nextStopPx + deltaPxShift;
            tryCancelScrollInterval(deltaPxShift, nextStopPx, endPx, intervalId)
          },
          deltaIntervalMiliSec);
        }

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
          var durationInMiliSec = 500;
          var pixelJump = -10;
          scrollWindowBy(-$window.innerHeight, durationInMiliSec, pixelJump);
        }

        $scope.scrollDown = function () {
          debugger;
          event.preventDefault();
          var durationInMiliSec = 500;
          var pixelJump = 10;
          scrollWindowBy($window.innerHeight, durationInMiliSec, pixelJump);
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