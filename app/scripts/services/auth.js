'use strict';

/**
 * @ngdoc service
 * @name angularTestbedApp.Auth
 * @description
 * # Auth
 * Service in the angularTestbedApp.
 */
angular.module('angularTestbedApp')
.service('Auth', function ($rootScope, Api) {

	var token = 'null';

	$rootScope.$on('unauthorized!', function () {
		token = null;
		console.log('kromid');
	});

	this.isAuth = function () {
		return !!token;
	};

	this.auth = function (data) {
		return Api.auth({
			email: data.email,
			pass: data.pass
		}).then(function (data) {
			token = data;
		});
	};




});
