'use strict';

/**
 * @ngdoc function
 * @name tempGitApp.controller:LocateCtrl
 * @description
 * # LocateCtrl
 * Controller of the tempGitApp
 */
angular.module('tempGitApp')
  .controller('LocateCtrl', function ($scope, $routeParams, $http, konStores) {
   		$scope.stores = konStores.query({storeId: $routeParams.storeId});

      $scope.storeBlurb = false;
      $('#storeDivImageContainer').hover(function(event){
        event.preventDefault();
          $('#storeDivImageBlurb').toggleClass('fadeIn');


      })
   		/*$http.get('stores/stores.json').success (function(data){
   			$scope.storeVar = data; 
   		});
									Back up just incase the service doesn't work. 	

									*/  

        
  })
  /*.animation('.slide',[function(){

  		return {
  			enter: function(element,doneFn) {
  				jQuery(element).hover(function(){
  					
  					
  				})
  			}

  		}




  }])*/



  ;
