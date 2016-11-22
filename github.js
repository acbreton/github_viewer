(function(){
    
    var github = function($http){
      
      var getUser = function(username){
            return $http.get("https://api.github.com/users/" + username)
                        .then(function(response){
                          return response.data; 
                        }, function errorCallback(response) {
                          return "Data Not Found";
                        });
      };

      var getRepo = function(username, repo){
            return $http.get("https://api.github.com/repos/"+username+"/"+repo)
                        .then(function(response){
                            return response.data;
                        }, function errorCallback(response) {
                          return "Data Not Found";
                        });
      };
      
      var getRepos = function(user){
            return $http.get(user.repos_url)  
                        .then(function(response){
                            return response.data;
                        }, function errorCallback(response) {
                          return "Data Not Found";
                        });
      };

      var getContributors = function(username, repo){
            return $http.get("https://api.github.com/repos/"+username+"/"+repo+"/contributors")
                        .then(function(response){
                            return response.data;
                        }, function errorCallback(response) {
                          return "Data Not Found";
                        });
      };
      
      return {
          getUser: getUser,
          getRepo: getRepo,
          getRepos: getRepos,
          getContributors: getContributors
      };
        
    };
    
    var module = angular.module("githubViewer");
    module.factory("github", github);
    
}());