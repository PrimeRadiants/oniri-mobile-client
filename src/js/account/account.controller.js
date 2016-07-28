(function () {
  'use strict';

  angular
    .module('app')
    .controller('AccountCtrl', AccountCtrl);

    AccountCtrl.$inject = ['$scope', 'user'];
    function AccountCtrl ($scope, user) {
      user.load();
      $scope.user = user.get;
      $scope.settings = {
        enableFriends: true
      };
    }
})();
