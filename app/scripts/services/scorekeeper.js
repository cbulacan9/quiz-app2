'use strict';

/**
 * @ngdoc service
 * @name quizApp.scoreKeeper
 * @description
 * # scoreKeeper
 * Value in the quizApp.
 */
angular.module('quizApp')
  	.value('scoreKeeper', {score: 0})
  	.factory('serverQuizData', function($http) {
  		var factory = {};

  		factory.getValue = function() {
  			return $http.get('http://localhost:3000/questions').success(function(questions) {
  				return(questions);
  			}).error(function(){
  				return('error');
  			});
  		}

  		return factory;
  	})
  	.factory('quiz', function($http, $resource){
  		var factory = {};
  		factory.getValue = function(){
  			var thing = $resource('http://localhost:3000/questions')
  			return thing.get({});
  				
  		}
  		return factory
  	})