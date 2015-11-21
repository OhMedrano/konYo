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
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'UpdateCtrl'
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
      .when('/admin',{
        templateUrl: 'views/admin.html',
        controller: 'UpdateCtrl'
      })
      .when('/media', {
        templateUrl: 'views/media.html',
        controller: 'MediaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
