'use strict';

/**
 * @ngdoc function
 * @name tempGitApp.controller:UpdatectrlCtrl
 * @description
 * # UpdatectrlCtrl
 * Controller of the tempGitApp
 */
angular.module('tempGitApp')
  .controller('UpdateCtrl', function ($scope, $firebaseObject, $firebaseArray) {

 
  			/*var ref = new Firebase('https://konditori.firebaseIO.com/Updates');
  			var syncObject = $firebaseArray(ref);
  		
  			syncObject.$bindTo($scope, "data");*/

  			

  				var ref = new Firebase('https://konditori.firebaseIO.com/');

  				$scope.Updates = $firebaseArray(ref);



  				$scope.addUpdate = function(){
  						    var re = /\/n/g; 
   							 var str = $scope.update;
     						var subst = '<br>';
    					var result = str.replace(re, subst);
  					
  						var title = $scope.title;
  						$scope.Updates.$add({
  							Title:title,
  							Body: result
  						});

  						$scope.update = '';
  				}

  				

  			
  });
