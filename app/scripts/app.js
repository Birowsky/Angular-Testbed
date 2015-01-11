'use strict';

/**
 * @ngdoc overview
 * @name angularTestbedApp
 * @description
 * # angularTestbedApp
 *
 * Main module of the application.
 */
angular
  .module('angularTestbedApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function (AuthInterceptor) {
    console.log(AuthInterceptor);
  });
