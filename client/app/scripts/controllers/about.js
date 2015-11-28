'use strict';

/**
 * @ngdoc function
 * @name tempGitApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tempGitApp
 */
angular.module('tempGitApp')
  .controller('AboutCtrl', function ($scope) {
    /*	$scope.myInterval = 3000;

    	$scope.slides = [
    	{
    		image:'images/aboutImages/aboutStore/kondiPhoto1.jpg'
    	},
    	{
    		image:'images/aboutImages/aboutStore/kondiPhoto2.jpg'
    	},
    	{
    		image:'images/aboutImages/aboutStore/kondiPhoto3.jpg'
    	}];

    	
*/
        $('.notMain').hide();

        $('#ownersInfo').click(function(){
            $('#aboutSelections').children().removeClass('aboutNavActive');
            $('#aboutContents').children().hide();
            $('#aboutOwners').fadeIn('slow');
            $(this).addClass('aboutNavActive');
        });

           $('#baristasInfo').click(function(){
            $('#aboutSelections').children().removeClass('aboutNavActive');
            $('#aboutContents').children().hide();
            $('#aboutBaristass').fadeIn('slow');
            $(this).addClass('aboutNavActive');
        });
              $('#storesInfo').click(function(){
            $('#aboutSelections').children().removeClass('aboutNavActive');
            $('#aboutContents').children().hide();
            $('#aboutStores').fadeIn('slow');
            $(this).addClass('aboutNavActive');
        });


       
  });
