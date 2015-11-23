'use strict';

/**
 * @ngdoc directive
 * @name tempGitApp.directive:faded
 * @description
 * # faded
 */
angular.module('tempGitApp')
  .directive('faded', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the faded directive');
      }
    };
  });
