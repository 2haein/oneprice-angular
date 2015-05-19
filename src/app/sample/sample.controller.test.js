'use strict';

describe('SampleCtrl', function(){

	var scope;
	var createCtrl;
	var mockSampleService = {};

	beforeEach(module('MyApp'));

	beforeEach(module(function ($provide) {
		$provide.value('SampleService', mockSampleService);
	}));

	beforeEach(inject(function($rootScope, $controller, $q) {

		mockSampleService.getData = function() {
			return $q.when('<Data>');
		}

		scope = $rootScope.$new();
		createCtrl = function() {
			$controller('SampleCtrl', {$scope: scope});
		};
	}));

	describe('.constructor', function() {

		it('can be created', function() {
			expect(createCtrl).to.not.throw();
		});

	});

});
