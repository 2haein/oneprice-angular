'use strict';

angular.module('MyApp', ['ngSanitize', 'ngRoute'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/main/index.html',
				controller: 'MainCtrl'
			})
			.when('/sample', {
				templateUrl: 'app/sample/index.html',
				controller: 'SampleCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	})
;
