'use strict';
const ROOT_PATH = process.cwd();
var http = require('http');
var serviceUser = require('../services/usersService')();
var serviceDebit = require('../services/debitsService')();

module.exports = function(app) {	
	var controller = {};

	controller.get = function(request, response) {
		if (Object.keys(request.query).length > 0) {	
			try {
				serviceDebit.getByQuery(request.query).then(
					function(debits) {
						if(Object.keys(debits).length == 0)
							response.status(404).json();

						response.status(200).json(debits);
					},
					function(erro) {
						response.status(500).json({message: 'Erro: data inválida'});
					}
				);
			} catch (err) {
	        	response.status(500).json({message: 'Erro: data inválida'});
	      	}
		}else{
            response.status(404).json();
        }
	};

	controller.post = function(request, response) {
		serviceUser.count('cardId', request.body[0].cardId).then(
			function(count) {
				if(count <= 0){
					response.status(500).json('Requisição inválida'); 	
				} else {
					serviceDebit.post(request.body).then(
						function(debit) {
							response.status(201).json(debit);
						},
						function(erro) {
							response.status(500).json(erro);
						}		
					);
				}				
		});		
	};
	return controller;
};




	