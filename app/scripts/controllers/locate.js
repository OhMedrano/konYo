'use strict';

/**
 * @ngdoc function
 * @name tempGitApp.controller:LocateCtrl
 * @description
 * # LocateCtrl
 * Controller of the tempGitApp
 */
angular.module('tempGitApp')
  .controller('LocateCtrl', function ($scope, $routeParams, $http, konStores) {
   		$scope.stores = konStores.query({storeId: $routeParams.storeId});




   		/*$http.get('stores/stores.json').success (function(data){
   			$scope.storeVar = data; 
   		});
									Back up just incase the service doesn't work. 	

									*/   		
  });
