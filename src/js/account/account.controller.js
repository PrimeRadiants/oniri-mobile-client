(function() {
  'use strict';

  angular
    .module('app')
    .controller('AccountCtrl', AccountCtrl);

    AccountCtrl.$inject = ['$scope'];
    function AccountCtrl($scope) {
      $scope.settings = {
        enableFriends: true
      };
    }
})();
