(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {

      $stateProvider

      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      })

      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      .state('tab.mynovents', {
        url: '/mynovents',
        views: {
          'tab-mynovents': {
            templateUrl: 'templates/tab-mynovents.html',
            controller: 'MyNoventsCtrl'
          }
        }
      })

      .state('tab.store', {
          url: '/store',
          views: {
            'tab-store': {
              templateUrl: 'templates/tab-store.html',
              controller: 'StoreCtrl'
            }
          }
        })
        .state('tab.store-detail', {
          url: '/store/:chatId',
          views: {
            'tab-store': {
              templateUrl: 'templates/store-detail.html',
              controller: 'ChatDetailCtrl'
            }
          }
        })

      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/login');

    }
})();
