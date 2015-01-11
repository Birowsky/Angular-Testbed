'use strict';

/**
 * @ngdoc directive
 * @name angularTestbedApp.directive:soKromid
 * @description
 * # soKromid
 */
angular.module('angularTestbedApp')
.directive('soKromid', function (Api) {
	return {

		templateUrl: 'views/so-kromid.html',

		// scope: true,
		link: function postLink(scope) {
			scope.soKromid = {};


			scope.soKromid.content = 'nemat nisto';

			scope.soKromid.theFilter = 'oajwefoj';

			//servisu, daj mi 'content'
			//ko ke mi go dajs, da go klajme vo soKromid.content

			// scope.vrednost = 'bafca';
			console.log(scope.vrednost);


			var promise = Api.getContent();

			promise.then(function (data) {
				scope.soKromid.content = data;
			});
		}

	};
});
