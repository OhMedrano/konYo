'use strict';

describe('Controller: KonmenuCtrl', function () {

  // load the controller's module
  beforeEach(module('tempGitApp'));

  var KonmenuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KonmenuCtrl = $controller('KonmenuCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
