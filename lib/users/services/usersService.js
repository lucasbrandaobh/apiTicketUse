'use strict';
var User = require('../models/user');

module.exports = function(app) {	
	var service = {
		getAll: getAll,
        getById : getById,
		count : count,
		post : post,
		remove : remove
	};        	

	function getAll () {
		return User.find()
				   .exec();
	};	
    
    function getById (id) {
		return User.findById(id)
				   .exec();
	};

	function count (field, value) {
		return User.count()
				   .where(field)
				   .equals(value)
				   .exec();			 
	};

	function post (newUser) {
		return User.create(newUser);
	};

	function remove (id) {
		return User.remove()
		           .where("cardId")
		           .equals(id)
		           .exec();
	};

	return service;
};


