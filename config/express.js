var config = require('./config'),
	express = require('express');

module.exports = function() {
	var app = express();
	
	app.get('/', res.render('index'));
	
	app.use(express.static('./public'));
	
	return app;
};