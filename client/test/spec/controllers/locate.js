'use strict';

describe('Controller: LocateCtrl', function () {

  // load the controller's module
  beforeEach(module('tempGitApp'));

  var LocateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LocateCtrl = $controller('LocateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
