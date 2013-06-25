(function(ng, app){
  app.directive("feedbackBoxDirective", function ($document, $controller) {
    function Controller($scope) {
      $scope.showAlert = function() {
        debugger;
        window.alert("Alert: Watch out for the Mallet");
      }
    }
    var link = function ($scope, $element, $attrs, $controller) {
      debugger;
    }
    var template = "<input type='Text' ng-model='feedback' ng-click='showAlert()' />{{feedback}}";
    return {
      replace: false,
      template: template,
      scope: {
        "ng-click": "&"
      }
      //link: link
    }
  });
}(angular, magazineApp))