'use strict';

/**
 * @ngdoc service
 * @name angularTestbedApp.AuthInterceptor
 * @description
 * # AuthInterceptor
 * Service in the angularTestbedApp.
 */
angular.module('angularTestbedApp')
.service('AuthInterceptor', function ($rootScope, $q, $timeout) {


	var that = this;


	this.requestError = function (rejection) {

		if (rejection.status === 401) {
			$rootScope.$broadcast('unauthorized!');
		}

		return $q.reject(rejection);
	};



	window.a = function () {
		$timeout(function () {
			that.requestError({status: 401});
		});
	};


});
