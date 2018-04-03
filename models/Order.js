//models/Order.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var orderSchema = new Schema({
	name: String,
	price: Number,
	description: String
});

module.exports = mongoose.model('Order', orderSchema);