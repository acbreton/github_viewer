(function() {

    var app = angular.module("githubViewer");

    var RepoController = function($scope, github, $routeParams, $location) {

        var onRepoDetailComplete = function(data) {
            $scope.repoDetail = data;
        };

        var onRepoComplete = function(data){
        	$scope.repo = data;
        };

        var onRepos = function(data) {
            $scope.repos = data;
        };

        var onError = function(reason) {
            $scope.error = "Could not fetch the data.";
        };

        $scope.repo = $routeParams.repo;
        $scope.username = $routeParams.username;
        $location.path("/repo/"+ $scope.username +"/"+ $scope.repo);
        github.getRepo($scope.username,$scope.repo).then(onRepoComplete, onError);
        github.getContributors($scope.username,$scope.repo).then(onRepoDetailComplete, onError);
    };

    app.controller("RepoController", RepoController);

}());