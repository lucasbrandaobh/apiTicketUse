'use strict';
var serviceUser = require('../services/usersService')();

module.exports = function(app) {		
	var controller = {};

	controller.get = function(request, response) {
		serviceUser.getAll().then(
			function(users) {
                if(Object.keys(users).length == 0)
                    return response.status(404).json();
                
				return response.status(200).json(users);
			},
			function(erro) {
				return response.status(500).json(erro);
			}
		);
	};

	controller.post = function(request, response) {
		serviceUser.count('email', request.body.email).then(
			function(count) {				
				if(count > 0){		
					response.status(400).json({message: 'Erro: E-mail já existente'}); 	
				} else {
					serviceUser.post(request.body).then(
						function(user) {
							response.status(201).json(user);
						},
						function(erro) {
							response.status(500).json(erro);
						}				
					)
				}
			});		
	};
	
	return controller;
};


