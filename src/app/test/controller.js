(function () {



'use strict';

angular.module('oneprice')
    .controller('TestController',
        ['$rootScope','TestSvc',
            function ($rootScope,TestServ) {

                $rootScope.listt = null;
                $rootScope.error = null;

                $rootScope.loadData = function() {
                    TestServ.getData()
                        .then(function(data) {
                                $rootScope.listt = data.dataa;
                            },
                            function(err) {
                                $rootScope.error = 'Sorry, error in getting data: ' + err;
                            });
                };

                $rootScope.loadData();

            }]);

})();