(function() {

    var app = angular.module("githubViewer");

    var MainController = function($scope, $interval, $location) {

        $scope.search = function(username) {
            $location.path("/user/" + username);
            console.log(username);
        };

        $scope.username = "";
    };

    app.controller("MainController", MainController);

}());