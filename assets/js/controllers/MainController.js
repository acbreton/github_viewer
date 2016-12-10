(function() {

    var app = angular.module("githubViewer");

    var MainController = function($scope, $interval, $location, $rootScope) {

        $scope.search = function(username) {
            $location.path("/user/" + username);
            $rootScope.main = false;
        };

        $scope.mainStyle = {
        	"background-image": "url('img/main.jpg')",
        	"background-size": "cover",
        	"height": "inherit",
        	"max-width": "100%",
        	"-webkit-filter": "grayscale(100%)",
        	"filter": "grayscale(100%)"
        };

        $scope.home = function() {
            $rootScope.main = true;
        }

        $scope.username = "";
        $rootScope.main = true;
    };

    app.controller("MainController", MainController);

}());