'use strict';
var mongoose = require('mongoose');

module.exports = function(uri) {
	mongoose.Promise = global.Promise;
	mongoose.connection.openUri(uri, {useMongoClient: true});

	process.on('SIGINT', function() {
		mongoose.connection.close(function() {
			process.exit(0);
		});
	});
};



