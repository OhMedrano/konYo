'use strict';

/**
 * @ngdoc function
 * @name tempGitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tempGitApp
 */
angular.module('tempGitApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.locations = [
    	'5th avenue',
    	'7th avenue'
    ];
  });
