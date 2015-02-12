(function(){
  'use strict';

  angular
    .module('ngIntro')
    .controller('PostsCtrl', ['$scope', 'Api', function($scope, Api) {

       Api.getPosts().then(function(resp) {
        $scope.posts = resp.data;
      });

    }]);
})();
