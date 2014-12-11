var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quizapp');
mongoose.connection.on('error', console.error.bind(console, 'connection error'));

var questionSchema = new mongoose.Schema({
	question: String,
	ops:[],
	answer: String,
	difficulty: Number
})

module.exports = {Question: mongoose.model("Question", questionSchema)};
