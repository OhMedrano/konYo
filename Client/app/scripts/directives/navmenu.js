'use strict';

/**
 * @ngdoc directive
 * @name tempGitApp.directive:navMenu
 * @description
 * # navMenu
 */
angular.module('tempGitApp')
  .directive('navMenu', function () {
    return {
      replace:true,
      templateUrl: 'templates/navMenu.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        var navBarz = $('.navBigStyle a');
        
        var backImage = $(this).css('background-image','url("/images/vinSwedFlag.jpg');

        navBarz.mouseenter(function(){

        	
        	$(this).fadeIn(1500).addClass('navMenuActive').css('color','white');

        });
        navBarz.mouseleave(function() {
        	$(this).removeClass('navMenuActive').css('color','#777');
        });
        navBarz.click(function(){
        	$(this).removeClass('navMenuActive')
        	$(this).addClass('navMenuActive')
        })
      }
    };
  });
