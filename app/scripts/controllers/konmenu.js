'use strict';

/**
 * @ngdoc function
 * @name tempGitApp.controller:KonmenuCtrl
 * @description
 * # KonmenuCtrl
 * Controller of the tempGitApp
 */
angular.module('tempGitApp')
  .controller('konmenuCtrl', function ($scope,$http) {
    	$http.get('infos/menu.json').success(function(data){
    		$scope.menuItems = data;
    	});
  });
