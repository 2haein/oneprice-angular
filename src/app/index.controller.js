(function() {
  'use strict';

  angular
    .module('oneprice-admin')
    .controller('RootController', RootController);

  /** @ngInject */
  function RootController($scope, AuthService, $state, $uibModal) {
    var vm = this;

    vm.goPostComment = function() {
      var param = {filter:angular.toJson({"status":["init","check"]})};
      $state.go('posts.list',param);
    };

    vm.logout = function() {
      AuthService.logout();
      $state.go('login');
    };

    vm.password = function(data) {
        $uibModal.open({
            animation: true,
            backdrop: 'static',
            controller:'ModalPasswordController',
            templateUrl: 'components/modal/password.html'
        });
    };

  }

})();
