'use strict';

describe('Controller: LocdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('tempGitApp'));

  var LocdetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LocdetailCtrl = $controller('LocdetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
