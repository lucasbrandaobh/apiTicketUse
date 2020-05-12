'use strict'; 
module.exports = function(app) {
	var controller = app.controllers.loginController;
	
	app.route('/login')
  	.post(controller.login)
};
