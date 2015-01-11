'use strict';

describe('Directive: authModal', function () {

  // load the directive's module
  beforeEach(module('angularTestbedApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<auth-modal></auth-modal>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the authModal directive');
  }));
});
