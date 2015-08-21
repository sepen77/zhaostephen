var config = require('./config'),
	express = require('express');

module.exports = function() {
	var app = express();
	
	app.use(express.static(__dirname + '/public'));
	
	app.get('/', function(req, res) {
		res.sendFile('index.html');
	});
	
	
	return app;
};