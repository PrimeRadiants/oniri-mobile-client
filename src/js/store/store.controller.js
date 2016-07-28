(function() {
  'use strict';

  angular
    .module('app')
    .controller('StoreCtrl', StoreCtrl);

    StoreCtrl.$inject = ['$scope', 'store'];
    function StoreCtrl($scope, store) {
      store.load();
      $scope.novents = store.all;

    }
})();
