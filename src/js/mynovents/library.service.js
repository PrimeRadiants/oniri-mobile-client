(function() {
  'use strict';

  var mockNovents = [
    {
      id: 1,
      title: 'Novent title',
      authors: ['Georges Biaux', 'George Abitbol', 'Eli Arroway'],
      publication: 1469703852
    }
  ];

  angular
    .module('app')
    .factory('library', library);

    function library() {
      var novents = [];
      return {
        load: load,
        all: all,
        get: get
      };

      function load() {
        //TODO Call Oniri API
        novents = mockNovents;
        return novents;
      }

      function all() {
        return novents;
      }

      function get(noventId) {
        for (var i = 0; i < novents.length; i++) {
          if (novents[i].id === parseInt(chatId)) {
            return novents[i];
          }
        }
        return null;
      }
    }

})();
