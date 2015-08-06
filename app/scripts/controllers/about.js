'use strict';

/**
 * @ngdoc function
 * @name tempGitApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tempGitApp
 */
angular.module('tempGitApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
