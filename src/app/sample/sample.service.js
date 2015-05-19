'use strict';

angular.module('MyApp')
	.factory('SampleService',
		['$http', '$q',
		function ($http, $q) {

			return {

				// Given an ID, return a promise for the
				getData: function(){

					console.log('SampleService.getData');

					var defer = $q.defer();

					// Note: this is a hack. We always get data from the same json file.
					$http.get('/assets/data/sample.json')
						.success(function(data) {
							defer.resolve(data);
						})
						.error(function(data, status, headers) {
							console.log('error getting data');
							defer.reject('Error in getting data.');
						});

					return defer.promise;
				}


			};

	}]);
