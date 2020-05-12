'use strict';
var mongoose = require('mongoose');

var debitsSchema = mongoose.Schema({
	cardId: String,
	code: String,
	value: Number,
	debitedAt: Date 
}, 
{
	versionKey: false
});

debitsSchema.pre('save', function(next) {
  	var currentDate = new Date();
  	
  	if (!this.debitedAt)
    	this.debitedAt = currentDate;

	next();
});

module.exports = mongoose.model('debits', debitsSchema);
