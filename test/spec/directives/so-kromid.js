'use strict';

describe('Directive: soKromid', function () {

  // load the directive's module
  beforeEach(module('angularTestbedApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<so-kromid></so-kromid>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the soKromid directive');
  }));
});
