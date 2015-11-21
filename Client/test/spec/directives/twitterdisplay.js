'use strict';

describe('Directive: twitterDisplay', function () {

  // load the directive's module
  beforeEach(module('tempGitApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<twitter-display></twitter-display>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the twitterDisplay directive');
  }));
});
