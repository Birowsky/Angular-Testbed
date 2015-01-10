'use strict';

/**
 * @ngdoc directive
 * @name angularTestbedApp.directive:soKromid
 * @description
 * # soKromid
 */
angular.module('angularTestbedApp')
.directive('soKromid', function (Api) {
	return function postLink(scope, element, attrs) {
		scope.soKromid = {};

		scope.soKromid.content = 'nemat nisto';

		scope.soKromid.theFilter = 'oajwefoj';

		//servisu, daj mi 'content'
		//ko ke mi go dajs, da go klajme vo soKromid.content


		var promise = Api.getContent();

		promise.then(function (data) {
			scope.soKromid.content = data;
		});




	};
});
