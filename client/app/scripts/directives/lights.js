'use strict';

/**
 * @ngdoc directive
 * @name tempGitApp.directive:lights
 * @description
 * # lights
 */
angular.module('tempGitApp')
  .directive('faderImage', function () {
    return {
      template: '<div></div>',
      restrict: 'EAC',
      link: function postLink(scope, element, attrs) {
      	element.hide()
        element.mouseenter(function(){
        	this.show('fast');
        });
      }
    };
  });
