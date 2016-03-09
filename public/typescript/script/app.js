( function() {

   'use strict';
  /**
   * @ngdoc overview
   * @name myNodeJsStyApp
   * @description
   * # myNodeJsStyApp
   *
   * Main module of the application.
   */

  angular.module('myNodeJsStyApp', ['ngRoute'])
         .config(config);

  config.$inject = ['$routeProvider'];
  function config($routeProvider) {
     $routeProvider
     .when('/', {templateUrl: 'views/home.html',controller : 'systaxHighlighterCtl'})
     .when('/home', {templateUrl: 'views/home.html',controller : 'systaxHighlighterCtl'})
     .when('/nopage', {templateUrl: 'view/snopage.html',controller : 'systaxHighlighterCtl'})
     .when('/:link', { controller : 'systaxHighlighterCtl'})
     .otherwise({redirectTo: '/nopage'});

  }
})();
