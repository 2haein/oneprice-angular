(function() {
  'use strict';

  angular
    .module('oneprice')
    .config(config);

  /** @ngInject */
  function config($logProvider, $locationProvider, $httpProvider, localStorageServiceProvider, onepriceConfig) {
    // send cookies when ajax call...
    $httpProvider.defaults.withCredentials = true;
    // Enable log
    $logProvider.debugEnabled(onepriceConfig.logEnabled);

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: true
    }).hashPrefix('!');

    $httpProvider.interceptors.push('httpInjector');

    localStorageServiceProvider
      .setStorageCookie(365, '/').setPrefix('opa');
      //.setStorageCookieDomain('localhost:3000');
  }

})();
