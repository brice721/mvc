(function () {
  'use strict';

  angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/home', {
        templateUrl: '/home/views/homeIndex.html',
        controller: 'HomeController'
      });
    }])

    .controller('HomeController', [function() {

    }]);
});