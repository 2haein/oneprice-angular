(function() {


'use strict';

angular.module('oneprice')
    .factory('TestSvc',
        ['$http', '$q',
            function ($http, $q) {

                return {

                    getData: function(){

                        var defer = $q.defer();

                        $http.get('assets/data/sample.json')
                            .success(function(data) {
                                defer.resolve(data);
                            })
                            .error(function() {
                                // console.log('error getting data');
                                defer.reject('Error in getting data.');
                            });

                        return defer.promise;
                    }

                };

            }]);

})();