'use strict';

/**
 * @ngdoc directive
 * @name tempGitApp.directive:emailContact
 * @description
 * # emailContact
 */
angular.module('tempGitApp')
  .directive('emailContact', function () {
    return {
      replace:true,
      templateUrl: 'templates/emailContact.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
       scope.completedEmail= {};

       scope.updates = function(user) {
       	scope.completedEmail = angular.copy(user);
       	console.log(scope.completedEmail);
       	
       };

       scope.reset = function() {
       	scope.completedEmail = angular.copy(scope.completedEmail);
       };
       scope.reset();
      }
    };
  });
