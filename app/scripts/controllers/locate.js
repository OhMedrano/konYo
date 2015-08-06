'use strict';

/**
 * @ngdoc function
 * @name tempGitApp.controller:LocateCtrl
 * @description
 * # LocateCtrl
 * Controller of the tempGitApp
 */
angular.module('tempGitApp')
  .controller('LocateCtrl', function ($scope,konStores) {
   	$scope.stores = konStores.query();
   	
   	
  });
