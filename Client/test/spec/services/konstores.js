'use strict';

describe('Service: konStores', function () {

  // load the service's module
  beforeEach(module('tempGitApp'));

  // instantiate service
  var konStores;
  beforeEach(inject(function (_konStores_) {
    konStores = _konStores_;
  }));

  it('should do something', function () {
    expect(!!konStores).toBe(true);
  });

});
