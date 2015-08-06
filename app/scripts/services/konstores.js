'use strict';

/**
 * @ngdoc service
 * @name tempGitApp.konStores
 * @description
 * # konStores
 * Service in the tempGitApp.
 */
angular.module('tempGitApp')
  .service('konStores', function($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
  	return $resource('stores/stores.json',{},{
  		query:{method:'GET',params:{storeId:'stores'}, isArray:true}
  	});
  });
