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
      replace:true,	
      templateUrl: 'templates/aboutOwners.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.ownImage = [
        {
        	image:'images/aboutImages/aboutOwner/kondiPhoto1.jpg'	

        },
        {
        	image:'images/aboutImages/aboutOwner/kondiPhoto2.jpg'	

        },
        {
        	image:'images/aboutImages/aboutOwner/kondiPhoto3.jpg'	

        }
        ];
      }
    };
  });
