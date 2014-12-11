'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:QuizCtrl
 * @description
 * # QuizCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('QuizCtrl', function ($interval) {
    var self = this;

    var startTime = 50;

    self.counter = startTime;

    // working timer functions - turned off for development
    // self.cancelTimer = function() {
    //   $interval.cancel(self.timer);
    // };
    //
    // self.resetTimer = function() {
    //   self.counter = startTime;
    // };
    //
    // self.startTimer = function() {
    //   self.timer = $interval(function(){
    //     --self.counter;
    //     if (self.counter == 0) {
    //       $interval.cancel(self.timer);
    //       alert('Times Up!')
    //     }
    //   }, 1000)
    // };

  });
