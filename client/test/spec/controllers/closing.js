'use strict';

describe('Controller: ClosingCtrl', function () {

  // load the controller's module
  beforeEach(module('tempGitApp'));

  var ClosingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClosingCtrl = $controller('ClosingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
