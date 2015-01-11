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
	$scope.vrednost = 'na!';
	$scope.doMeFromBehind = function () {
		window.alert('that was awesome');
	};


});
