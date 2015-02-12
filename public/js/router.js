(function(){
  'use strict';

  angular
    .module('ngIntro')
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'templates/home.html'
        })
        .state('about', {
          url: '/about',
          templateUrl: 'templates/about.html'
        })
        .state('posts', {
          url: '/posts',
          templateUrl: 'templates/posts.html',
          controller: 'PostsCtrl'
        });
    });

})();
