'use strict'; 
var authenticator = require('../middlewares/authenticator');

module.exports = function(app) {
	var controller = app.controllers.debitsController;
	
	app.route('/debits')
  	.get(controller.get)
  	.post(authenticator,controller.post)
};
