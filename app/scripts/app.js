'use strict';

/**
 * @ngdoc overview
 * @name quizApp
 * @description
 * # quizApp
 *
 * Main module of the application.
 */

angular
  .module('quizApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.utils'
  ])

  .provider('scoreK', function() {
    this.startingScore = 0;
    this.score = 10;

    this.setScore = function(score) {
      this.score = score;
    };

    this.$get = function() {
      var score = this.score;
      var starting = this.startingScore;
      return {
        addScore: function() {
          starting += score;
        },
        getScore: function() {
          return starting;
        }
      }
    };

  })

  .config(function ($routeProvider, $locationProvider, scoreKProvider) {

    scoreKProvider
      .setScore(10);

    $locationProvider
      .hashPrefix('!');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
