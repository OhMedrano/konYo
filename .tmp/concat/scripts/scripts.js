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
  .config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
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

'use strict';

/**
 * @ngdoc function
 * @name tempGitApp.controller:UpdatectrlCtrl
 * @description
 * # UpdatectrlCtrl
 * Controller of the tempGitApp
 */
angular.module('tempGitApp')
  .controller('UpdateCtrl', ["$scope", "$firebaseObject", "$firebaseArray", function ($scope, $firebaseObject, $firebaseArray) {

 
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

  				

  			
  }]);

'use strict';

/**
 * @ngdoc function
 * @name tempGitApp.controller:MediaCtrl
 * @description
 * # MediaCtrl
 * Controller of the tempGitApp
 */
angular.module('tempGitApp')
  .controller('MediaCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

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

'use strict';

/**
 * @ngdoc directive
 * @name tempGitApp.directive:emailContact
 * @description
 * # emailContact
 */
angular.module('tempGitApp')
  .directive('emailContact', function () {
    return {
      replace:true,
      templateUrl: 'templates/emailContact.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
       scope.completedEmail= {};

       scope.update = function(user) {
       	scope.completedEmail = angular.copy(user);
       	console.log(scope.completedEmail);
       	scope.reset();
       };

       scope.reset = function() {
       	scope.completedEmail = angular.copy(scope.completedEmail);
       };
       scope.reset();
      }
    };
  });

'use strict';

/**
 * @ngdoc directive
 * @name tempGitApp.directive:twitterDisplay
 * @description
 * # twitterDisplay
 */
angular.module('tempGitApp')
  .directive('twitterDisplay', function () {
    return {
      replace:true,		
      templateUrl: 'templates/twitterDisplay.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
