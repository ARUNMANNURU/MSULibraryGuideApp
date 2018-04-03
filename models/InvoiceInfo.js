//models/InvoiceInfo.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var invoiceinfoSchema = new Schema({
	soldto: String,
	shipto: String,
	invoice: String,
	date: String,
	custcode: String,
	pageno: String,
	qcno: String,
	invoices: [{
		weight: String,
		price: String,
		metal: String,
		styleNo: String,
		description: String,
		labor: String,
		labor_pc: String,
		priceDWT: String,
		total: String
	}]
});

module.exports = mongoose.model('InvoiceInfo', invoiceinfoSchema);