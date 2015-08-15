'use strict';

/**
 * @ngdoc function
 * @name tempGitApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tempGitApp
 */
angular.module('tempGitApp')
 .controller('DropdownCtrl', function ($scope, $log) {
  $scope.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
});
