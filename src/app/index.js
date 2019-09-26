'use strict';

angular.module('oneprice', ['ngSanitize', 'ngRoute', 'ui.bootstrap'])
	.config(function ($routeProvider,$locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/main/index.html',
				controller: 'MainCtrl'
			})
			.when('/sample', {
				templateUrl: 'app/sample/index.html',
				controller: 'SampleCtrl'
			})
			// .otherwise({
			// 	redirectTo: '/'
			// });
			.when('/test', {
				templateUrl: 'app/test/content.html',
				controller: 'TestController',

		})
		$locationProvider.html5Mode(true);
	})

	.controller('NavBarCtrl', ['$scope', function ($scope) {

	}])

;
