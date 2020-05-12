'use strict';
var DebitModel = new require('../models/debits');

module.exports = function(app) {	
	var service = {
		getByQuery : getByQuery,
		post : post,
		remove : remove
	};        		

	function getByQuery (query) {
		if(query.initialDate){
			var dateStart = new Date(query.initialDate).toISOString("YYYY-MM-DD");
			var dateEnd = new Date(query.finalDate).toISOString("YYYY-MM-DD");	
			query = {debitedAt : {$gte:dateStart, $lte:dateEnd}};	
		}
		return DebitModel.find(query)
					     .select('debitedAt value')
					     .exec();			 
	};

	function post (newDebit) {
		return DebitModel.create(newDebit);
	};

	function remove (cardId) {
		return DebitModel.remove()
		           .where("cardId")
		           .equals(cardId)
		           .exec();
	};

	return service;
};


