'use strict';

/**
 * @ngdoc directive
 * @name tempGitApp.directive:twitterDisplay
 * @description
 * # twitterDisplay
 */
angular.module('tempGitApp')
  .directive('twitterDisplay', function () {
    return {
      replace:true,		
      templateUrl: 'templates/twitterDisplay.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
