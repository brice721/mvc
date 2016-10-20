(function () {
  'use strict';


  /**
   * @ngdoc function
   * @name app.route:HomeRoute
   * @description
   * # HomeRoute
   * Route of the app
   */

  angular.module('home').config('HomeControllerConfig');

  HomeController.$inject = ['$stateProvider'];
  function HomeControllerConfig($stateProvider) {

    $stateProvider
      .state('module.home', {
        url: '/home',
        data: {
          pageTitle: 'Home'
        },
        views: {
          '': {
            templateUrl: 'app/views/homeIndex.html',
            controller: 'HomeController',
            controllerAs: 'vm'
          },
          'featureHome@home.modules': {
            templateUrl: 'app/views/homeIndex.html'
          }
        }
      });
  }});