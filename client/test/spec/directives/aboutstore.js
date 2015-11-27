'use strict';

describe('Directive: aboutStore', function () {

  // load the directive's module
  beforeEach(module('tempGitApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<about-store></about-store>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the aboutStore directive');
  }));
});
