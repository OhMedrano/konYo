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
    
    $http.get('stores/stores.json').success (function(data){
    	$scope.storeVar = data;
    	

    
    }); 
    $scope.whichStore = $routeParams.storeId;
    console.log($scope.whichStore);
  });
