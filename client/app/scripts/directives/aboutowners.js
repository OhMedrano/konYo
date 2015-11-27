'use strict';

/**
 * @ngdoc directive
 * @name tempGitApp.directive:aboutOwners
 * @description
 * # aboutOwners
 */
angular.module('tempGitApp')
  .directive('aboutOwners', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the aboutOwners directive');
      }
    };
  });
