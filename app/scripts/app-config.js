'use strict';

angular.module('angularTestbedApp')
.config(function ($httpProvider) {

	$httpProvider.interceptors.push('AuthInterceptor');

});
