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
  .config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
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
  }]);

'use strict';

/**
 * @ngdoc function
 * @name tempGitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tempGitApp
 */
angular.module('tempGitApp')
  .controller('MainCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.locations = [
    	'5th avenue',
    	'7th avenue'
    ];
  }]);

'use strict';

/**
 * @ngdoc function
 * @name tempGitApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tempGitApp
 */
angular.module('tempGitApp')
  .controller('AboutCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

'use strict';

/**
 * @ngdoc function
 * @name tempGitApp.controller:LocateCtrl
 * @description
 * # LocateCtrl
 * Controller of the tempGitApp
 */
angular.module('tempGitApp')
  .controller('LocateCtrl', ["$scope", "$routeParams", "$http", "konStores", function ($scope, $routeParams, $http, konStores) {
   		$scope.stores = konStores.query({storeId: $routeParams.storeId});




   		/*$http.get('stores/stores.json').success (function(data){
   			$scope.storeVar = data; 
   		});
									Back up just incase the service doesn't work. 	

									*/   		
  }]);

'use strict';

/**
 * @ngdoc service
 * @name tempGitApp.konStores
 * @description
 * # konStores
 * Service in the tempGitApp.
 */
angular.module('tempGitApp')
  .service('konStores', ["$resource", function($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
  	return $resource('infos/stores.json',{},{
  		query:{method:'GET',params:{storeId:'stores'}, isArray:true}
  	});
  }]);

'use strict';

/**
 * @ngdoc directive
 * @name tempGitApp.directive:lights
 * @description
 * # lights
 */
angular.module('tempGitApp')
  .directive('lights', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the lights directive');
      }
    };
  });

'use strict';

/**
 * @ngdoc function
 * @name tempGitApp.controller:LocdetailCtrl
 * @description
 * # LocdetailCtrl
 * Controller of the tempGitApp
 */
angular.module('tempGitApp') // ...Change this soon.
  .controller('LocdetailCtrl', ["$scope", "$http", "$routeParams", function ($scope, $http, $routeParams) {
    /*	$scope.storeId = konStores.query({storeId: $routeParams.storeId});

    	$scope.store = konStores.filter(function(entry){

    		return entry.id === $scope.storeId
    	})[0];


        console.log($scope.storeId);
*/

    $scope.storeId = $routeParams.storeId;

    $http.get('infos/stores.json').success(function(data){
    	$scope.store = data.filter(function(entry){ 

    		return entry.id === $scope.storeId;
    	})[0];
    });
    
  }]);

'use strict';

/**
 * @ngdoc function
 * @name tempGitApp.controller:KonmenuCtrl
 * @description
 * # KonmenuCtrl
 * Controller of the tempGitApp
 */
angular.module('tempGitApp')
  .controller('konmenuCtrl', ["$scope", "$http", function ($scope,$http) {
    	$http.get('infos/menu.json').success(function(data){
    		$scope.menuItems = data;
    	});
  }]);
