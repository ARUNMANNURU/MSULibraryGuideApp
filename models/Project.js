//models/Project.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var projectSchema = new Schema({
	name: String,
	price: Number,
	description: String,
	image: String
});

module.exports = mongoose.model('Project', projectSchema);