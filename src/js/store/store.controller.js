(function() {
  'use strict';

  angular
    .module('app')
    .controller('StoreCtrl', StoreCtrl);

    StoreCtrl.$inject = ['$scope', 'store'];
    function StoreCtrl($scope, store) {
      store.load();
      $scope.novents = store.all;
      $scope.refresh = refresh;

      function refresh() {
        store.load();
        //TODO : use then()
        $scope.$broadcast('scroll.refreshComplete');
      }
    }
})();
