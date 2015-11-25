'use strict';

/** 
 * @ngdoc directive
 * @name tempGitApp.directive:navMenu
 * @description
 * # navMenu
 */
angular.module('tempGitApp')
  .directive('navMenu', function ($routeParams, $http, konStores ) {
    return {
      replace:true,
      templateUrl: 'templates/navMenu.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        var navBarz = $('#navBarz a');
        
        var backImage = $(this).css('background-image','url("/images/vinSwedFlag.jpg').fadeIn(200);
            
        var locBarz = $('#navBarz a').eq(2);

            locBarz.hover(function(event){
              event.preventDefault();

              $('#ayyyyy').css('display','block');


            });

          scope.stores = konStores.query({storeId: $routeParams.storeId});
/*        
        navBarz.mouseenter(function(){
          $(this).addClass('navMenuActive');*/
        	/*this.removeClass('navMenuActive').css('color','#777');*/
        /* });*/
        /*navBarz.mouseleave(function() {
        	$(this).removeClass('navMenuActive');
        });*/
       /* 
        navBarz.hover(function(){
          $(this).toggleClass('navMenuActive','fadeInLeft');
          
        });
        navBarz.click(function(){  
          if($(navBarz).hasClass('navMenuActive')){
            $(this).removeClass('navMenuActive');
            $(this).addClass('navMenuActive')
          }
          else{
          $(this).addClass('navMenuActive');
          }
        });
        $scope.apply()
*/      
      }
    };
  });
