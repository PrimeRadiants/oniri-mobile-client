(function() {
  'use strict';

  var mockUser = {
    username: "Shanira",
    email: "shanira@email.com",
    created: 1469738364
  };

  angular
    .module('app')
    .factory('user', user);

    function user() {
      var user = {};
      return {
        load: load,
        get: get
      };

      function load() {
        //TODO Call Oniri API
        user = mockUser;
        return user;
      }

      function get() {
        return user;
      }
    }

})();
