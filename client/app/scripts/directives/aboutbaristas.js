'use strict';

/**
 * @ngdoc directive
 * @name tempGitApp.directive:aboutBaristas
 * @description
 * # aboutBaristas
 */
angular.module('tempGitApp')
  .directive('aboutBaristas', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the aboutBaristas directive');
      }
    };
  });
