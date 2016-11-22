(function() {

    var app = angular.module("githubViewer", ["ngRoute"]);

    app.config(function($routeProvider){
    	$routeProvider.when("/user/:username", {
    		templateUrl: "user.html",
    		controller: "UserController"
    	})
    	.when("/repo/:username/:repo", {
    		templateUrl: "repo.html",
    		controller: "RepoController"
    	})
    	.otherwise({redirectTo: "/main"});
    });

}());