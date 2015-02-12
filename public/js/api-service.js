(function() {
  'use strict';

  angular
    .module('ngIntro')
    .factory('Api', ['$http', function($http) {
      var endpoint = 'http://localhost:3000',
          service = {
            getPosts: getPosts
          };

      function getPosts() {
        return $http.get(endpoint+'/posts').then(function(resp) {
          console.log(resp);
          return resp;
        });
      };

      return service;
    }]);
})();
