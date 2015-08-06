'use strict';

/**
 * @ngdoc function
 * @name tempGitApp.controller:LocdetailCtrl
 * @description
 * # LocdetailCtrl
 * Controller of the tempGitApp
 */
angular.module('tempGitApp')
  .controller('LocdetailCtrl', function ($scope, $routeParams, konStores) {
    $scope.stores = konStores.query({storeId: $routeParams.storeId});
    $scope.store = $scope.stores;
  });
