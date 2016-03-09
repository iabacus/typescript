var myApp = angular.module('angularApp', []);

myApp.controller('IndexCtrl', ['$scope', function ($scope) {
    $scope.text = '첫번쨰 !!! 이런 것 이군 !!!';
}]);


myApp.directive("menu", function() {
        return {
                restrict: "E",
                transclude: true,
                templateUrl: "menu.html"
        }
});

myApp.directive("bottom", function() {
        return {
                restrict: "E",
                transclude: true,
                templateUrl: "myBottom.html"
        }
});
