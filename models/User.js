//models/User.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var expenseSchema = new Schema({
	id: Number,
	token: String,
	name: String,
	email: String
});

module.exports = mongoose.model('User', expenseSchema);