'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:QuizCtrl
 * @description
 * # QuizCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('QuizCtrl', function () {
    var self = this;

      self.quiz = [
      {
        "q": 'Who is the best ping pong player at FSA?',
        'options': [{ 'value': "Mike"} , { 'value': 'Eddie'} , {'value' : 'Nimit'} , { 'value': 'Patrick'}],
        'answer': "Nimit",
        'difficulty': 8,
        'answered': false
      },
      { "q": "Which robot name was chanted during Lego Mindstorms?",
      'options':[{ 'value': 'infiniteLoop'} , { 'value': 'noHope.js'} , {'value' : 'johnny5'} , { 'value': 'none of the above'}],
      'answer':'noHope.js',
      'difficulty': 5,
      'answered': false
    },
    {
      'q': 'Out of the following frontend frameworks, which framework is most rails-like',
      'options':[{ 'value': 'Ember.js'} ,{ 'value': 'Angular.js'} , {'value' : 'Backbone.js'} , { 'value': 'Meteor.js'}],
      'answer':'Ember.js',
      'difficulty': 1,
      'answered': false
    },
    {
      'q': "Which project used a local data store?",
      'options':[{ 'value': 'TripPlanner'} ,{ 'value': 'Twitter.js'} , {'value' : 'WikiWalker'} , { 'value': 'WikiStack'}],
      'answer':'Twitter.js',
      'difficulty': 7,
      'answered': false
    }
    ];

    self.nextQuestion = {
      options: [{}, {}, {}, {}]
    };

    self.points = 0;

    self.submitQuestion = function() {
      // push the newly created question and its options
      self.quiz.push(self.nextQuestion);
      // zero out nextQuestion by making a new blank one
      self.nextQuestion = {
        options: [{}, {}, {}, {}]
      };
    };

    self.checkAnswer = function(question, val) {
      // check if the given val matches the answer
      if (!question.answered) {
        question.answered = true;
        if (question.answer === val) {
          self.points += 10;
        } else {
          self.points -= 10;
        }
      }
    };

  });
