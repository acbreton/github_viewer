(function() {

    var app = angular.module("githubViewer", ["ngRoute"]);

    app.config(function($routeProvider){
    	$routeProvider.when("/user/:username", {
    		templateUrl: "views/user.html",
    		controller: "UserController"
    	})
    	.when("/repo/:username/:repo", {
    		templateUrl: "views/repo.html",
    		controller: "RepoController"
    	})
    	.otherwise({
            redirectTo: "/",
            templateUrl: "views/home.html"
        });
    });

}());