'use strict';

/**
 * @ngdoc function
 * @name tempGitApp.controller:LocdetailCtrl
 * @description
 * # LocdetailCtrl
 * Controller of the tempGitApp
 */
angular.module('tempGitApp')
  .controller('LocdetailCtrl', function ($scope, $http, $routeParams) {
    $http.get('stores/stores.json').success (function(data){
    	$scope.storeVar = data;
    	$scope.whichStore = $routeParams.storeID;
    });
  });
