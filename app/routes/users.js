'use strict'; 
module.exports = function(app) {
	var controller = app.controllers.usersController;
	
	app.route('/users')
  	.get(controller.get)
  	.post(controller.post)
};
