'use strict';

/**
 * @ngdoc service
 * @name tempGitApp.instagram
 * @description
 * # instagram
 * Factory in the tempGitApp.
 */
angular.module('tempGitApp')
  .factory('instagram', ['$http',function ($http) {
    // Service logic
    // ...

    var client_id = '2dbdd885d5734d7b9a0c6269197858e5';
    var user_id = '558550968';

    // Public API here
    return {
      fetchPhotos: function(callback){
        var endpoint = "https://api.instagram.com/v1/users/" + user_id + "/media/recent/?";
        endpoint += "?count=99";
        endpoint += "&client_id=" + client_id;
        endpoint += "&callback=JSON_CALLBACK";
        $http.jsonp(endpoint).success(function(response){
          callback(response.data);
        });
        }
      }
    }]);
  
