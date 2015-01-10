'use strict';

/**
 * @ngdoc function
 * @name angularTestbedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularTestbedApp
 */
angular.module('angularTestbedApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
