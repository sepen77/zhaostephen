var config = require('./config'),
	express = require('express');

module.exports = function() {
	var app = express();
	
	app.use(express.static('./public'));
	
	app.get('/', function(req, res) {
		res.sendFile('index.html');
	});
	
	app.get('/api/profile', function(req, res) {
		res.sendFile('profile/index.html');
	});
	
	app.get('/api/projects', function(req, res) {
		res.sendFile('projects/index.html');
	});
	
	app.get('/api/photos', function(req, res) {
		res.sendFile('imagenation-photography/index.html');
	});
	
	return app;
};