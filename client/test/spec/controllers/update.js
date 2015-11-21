'use strict';

describe('Controller: UpdatectrlCtrl', function () {

  // load the controller's module
  beforeEach(module('tempGitApp'));

  var UpdatectrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UpdatectrlCtrl = $controller('UpdatectrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
