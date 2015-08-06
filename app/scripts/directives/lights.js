'use strict';

/**
 * @ngdoc directive
 * @name tempGitApp.directive:lights
 * @description
 * # lights
 */
angular.module('tempGitApp')
  .directive('lights', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the lights directive');
      }
    };
  });
