'use strict';

/**
 * @ngdoc service
 * @name angularTestbedApp.Api
 * @description
 * # Api
 * Service in the angularTestbedApp.
 */
angular.module('angularTestbedApp')
.service('Api', function ($q) {


	var content = [
		{
			id:1,
			category: 'blu',
			a: 'kromid'
		},
		{
			id:2,
			category: 'blu',
			a: 'luk'
		},
		{
			id:3,
			category: 'bla',
			a: 'praz'
		},
		{
			id:4,
			category: 'bla',
			a: 'piperki'
		},
		{
			id:5,
			category: 'bla',
			a: 'goeda'
		}
	];




	this.getContent = function () {
		var deferred = $q.defer();


		setTimeout(function () {
			deferred.resolve(content);
		}, 1000);


		return deferred.promise;
	};

});
