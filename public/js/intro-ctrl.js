(function(){
  'use strict';

  angular
    // when no [] is passed to angular.module()
    // the module is called vs. created
    .module('ngIntro')
    .controller('IntroCtrl', ['$scope', function($scope) {

      $scope.foo = 'Angular';

      $scope.subtitle = "Let's do some learnin'";

    }]);
})();
