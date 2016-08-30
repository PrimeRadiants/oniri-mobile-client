(function() {
  'use strict';

  angular
    .module('app')
    .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$http'];
    function LoginCtrl($scope, $http) {

      $scope.login = login;

      function login() {
        if($scope.email && $scope.password) {
          $http.get('https://apis.oniri.io/v1/rest/api/user');
        }
      }
    }
})();
