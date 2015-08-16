'use strict';

/**
 * @ngdoc overview
 * @name tempGitApp
 * @description
 * # tempGitApp
 *
 * Main module of the application.
 */
angular
  .module('tempGitApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/menu', {
        templateUrl: 'views/menu.html',
        controller: 'konmenuCtrl'
      })
      .when('/locs',{
        templateUrl:'views/locs.html',
        controller: 'LocateCtrl'
      }).
      when('/locs/:storeId', {
        templateUrl:'views/store-detail.html',
        controller: 'LocdetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
