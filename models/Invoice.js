//models/Invoice.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var invoiceSchema = new Schema({
	weight: Number,
	price: Number,
	metal: String,
	styleNo: Number,
	description: String,
	labor: Number,
	labor_pc: Number,
	priceDWT: Number,
	total: Number
});

module.exports = mongoose.model('Invoice', invoiceSchema);