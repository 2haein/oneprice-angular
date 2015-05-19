'use strict';

angular.module('MyApp')
	.controller('SampleCtrl',
		['$scope', 'SampleService', '$routeParams',
		function ($scope, SampleService, $routeParams) {

			console.log('SampleCtrl');

			$scope.loadData = function() {
				console.log('loadData');
				SampleService.getData()
				.then(function(data) {
					// console.log(data);
					$scope.list = data.data;
				},
				function(err) {
					$scope.error = "Sorry, error in getting data: " + err;
				});
			};

			$scope.loadData();

	}]);
