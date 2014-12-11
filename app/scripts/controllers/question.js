'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:QuestionCtrl
 * @description
 * # QuestionCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('QuestionCtrl', function ($scope, $http) {
    self = this;

    $http.get('http://localhost:3000/questions').success(function(questions){
      var quizArray = [];
      questions.forEach(function(question){
      var holderObj ={};
      holderObj.q = question.question;
      holderObj.answer = question.answer;
      holderObj.difficulty = question.difficulty;
      holderObj.options = [];
      for(var i = 0; i< question.ops.length; i++){
        var otherObj = {};
        otherObj = question.ops[i];
        holderObj.options.push(otherObj);
      }
      console.log(quizArray);
      quizArray.push(holderObj);
      holderObj= {};
    });
      self.quiz = quizArray;
    });

    self.nextQuestion = {
      q: "",
      options: [{}, {}],
      answer: ""
    };

    self.deleteQuestion= function(questionText, index){
      console.log(index);
      self.quiz.splice(index, 1);
      console.log(self.quiz);

      $http.post('http://localhost:3000/deleteQuestion', {question: questionText});
    }

    self.addOption = function(){
      self.nextQuestion.options.push({});
    }
    self.deleteOption = function(optionIndex){
      self.nextQuestion.options.splice(optionIndex, 1);

    }

    self.points = 0;

    self.submitQuestion = function() {
      console.log('working');
      // push the newly created question and its options
      self.quiz.push(self.nextQuestion);
      //ajax post to server route with self.nextQuestion as req.body
      $http.post('http://localhost:3000/newQuestion', {question: self.nextQuestion});

      // zero out nextQuestion by making a new blank one
      self.nextQuestion = {
        q: "",
        options: [{}, {}],
        answer: ""
      };
    };

	self.checkAnswer = function(question, val) {
    console.log('negative');
      // check if the given val matches the answer
      if (!question.answered) {
        question.answered = true;
        if (question.answer === val) {
          self.points += 10;
        } else {
          self.points -= 10;

        }
      }
      //$emit(self.points);
    };

    $scope.$watchCollection('question.nextQuestion.options', function(newval, oldval){
      $scope.newQuestionForm.$setValidity("num-options", newval.length > 1);
    });


    self.test = 'test';


  });
