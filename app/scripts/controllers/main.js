'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('MainCtrl', function ( $scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.minQuestionLength = function(question){
      return(question.length >= 10)
    }

    $scope.minOptions = function(question){

        return(question.options.length>1)
    }

    

    $scope.test = {text: "I work"}
  });
