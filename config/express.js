var config = require('./config'),
	routes = require('../app/routes.js'),
	express = require('express');

module.exports = function() {
	var app = express();
	
	app.use(express.static('./public'));

	app = routes(app);

	return app;
};