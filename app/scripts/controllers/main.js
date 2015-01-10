'use strict';

/**
 * @ngdoc function
 * @name angularTestbedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestbedApp
 */
angular.module('angularTestbedApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
