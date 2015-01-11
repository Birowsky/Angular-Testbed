'use strict';

/**
 * @ngdoc directive
 * @name angularTestbedApp.directive:authModal
 * @description
 * # authModal
 */
angular.module('angularTestbedApp')
.directive('authModal', function (Api, Auth) {
	return {
		templateUrl: 'views/auth-modal.html',
		restrict: 'A',
		link: function postLink(scope) {
			scope.authModal = {};
			scope.authModal.email = '';
			scope.authModal.pass = '';


			scope.authModal.doAuth = function () {
				Auth.auth({
					email: scope.authModal.email,
					pass: scope.authModal.pass
				});
			};

			scope.authModal.shouldShow = function () {
				return !Auth.isAuth();
			};





		}
	};
});
