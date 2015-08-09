'use strict';

/**
 * @ngdoc function
 * @name tempGitApp.controller:LocateCtrl
 * @description
 * # LocateCtrl
 * Controller of the tempGitApp
 */
angular.module('tempGitApp')
  .controller('LocateCtrl', function ($scope, $routeParams, $http) {
   		$http.get('stores/stores.json').success (function(data){
   			$scope.storeVar = data; 
   		});
   		
  });
