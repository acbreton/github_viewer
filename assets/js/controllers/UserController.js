(function() {

    var app = angular.module("githubViewer");

    var UserController = function($scope, github, $routeParams, $location, $rootScope) {

        var onUserComplete = function(data) {
            if(data == "Data Not Found"){
                $scope.error = "Hmm... we couldn't find "+$scope.username+"... Try searching another.";
            } else {
                $scope.user = data;
                github.getRepos($scope.user).then(onRepos, onError);
            }
        };

        var onRepos = function(data) {
            $scope.repos = data;
        };

        var onError = function(reason) {
            $scope.error = "Could not fetch the data.";
        };

        $scope.error = "";
        $rootScope.main = false;
        $scope.username = $routeParams.username;
        $location.path("/user/" + $scope.username);
        $scope.repoSortOrder = "-stargazers_count";
        github.getUser($scope.username).then(onUserComplete, onError);

    };

    app.controller("UserController", UserController);

}());