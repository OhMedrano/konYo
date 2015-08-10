'use strict';

/**
 * @ngdoc function
 * @name tempGitApp.controller:LocdetailCtrl
 * @description
 * # LocdetailCtrl
 * Controller of the tempGitApp
 */
angular.module('tempGitApp') // ...Change this soon.
  .controller('LocdetailCtrl', function ($scope, $http, $routeParams) {
    $scope.storeId = $routeParams.storeId;

    $http.get('stores/stores.json').success(function(data){
    	$scope.store = data.filter(function(entry){ 

    		return entry.id === $scope.storeId;
    	})[0];
    });
    
  });
