'use strict';

/**
 * @ngdoc directive
 * @name tempGitApp.directive:aboutStore
 * @description
 * # aboutStore
 */
angular.module('tempGitApp')
  .directive('aboutStore', function () {
    return {
      replace:true,
      templateUrl: 'templates/aboutStore.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        scope.myInterval = 3000;

        $('#something > div').hide();
        setInterval(function(){
        	$('#something')
        		.fadeOut(1000)
        		.next()
        		.fadeIn(1000)
        		.end()
        		.appendTo('#somethings');

        },3000);


    	scope.slides = [
    	{
    		image:'images/aboutImages/aboutStore/kondiPhoto1.jpg'
    	},
    	{
    		image:'images/aboutImages/aboutStore/kondiPhoto2.jpg'
    	},
    	{
    		image:'images/aboutImages/aboutStore/kondiPhoto3.jpg'
    	},
      {
        image:'images/aboutImages/aboutStore/kondiPhoto4.jpg'
      },
      {
        image:'images/aboutImages/aboutStore/kondiPhoto5.jpg'
      }];
    	

      }
    };
  });
