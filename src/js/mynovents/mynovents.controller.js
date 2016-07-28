(function() {
  'use strict';

  angular
    .module('app')
    .controller('MyNoventsCtrl', MyNoventsCtrl);

    MyNoventsCtrl.$inject = ['$scope', 'library'];
    function MyNoventsCtrl($scope, library) {
      library.load();
      $scope.novents = library.all;

    }
})();
