var express = require('express');

var model = require('../models');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.send(200);
});

router.get('/questions', function(req, res) {
  model.Question.find({}, function(err,questions){
    res.send(questions);
  });
});

router.post('/deleteQuestion', function(req, res) {
  var question = req.body.question;
  console.log(question);

  model.Question.findOneAndRemove({question: question}, function(err,questions){
    if(err) console.log(err);
    res.status(200);
  });
});




router.post('/newQuestion', function(req, res) {
  var ques = req.body.question;
  model.Question.create({question: ques.q, ops: ques.options, answer: ques.answer, difficulty: ques.difficulty}, function(err, newQUestion){
    if(err) console.log(err);
    res.status(200);
  });
  //mongoose create with question object
});


module.exports = router;
