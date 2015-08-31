var path = require('path');

module.exports = function(app){
	app.get('/', function(req, res) {
    	res.sendFile(path.resolve(__dirname + '/../public/index.html'));
	});

	app.get('/api/profile', function(req, res) {
    	res.sendFile(path.resolve(__dirname + '/../public/index.html'));
	});

	app.get('/api/projects', function(req, res) {
    	res.sendFile(path.resolve(__dirname + '/../public/index.html'));
	});

	app.get('/api/photos', function(req, res) {
    	res.sendFile(path.resolve(__dirname + '/../public/index.html'));
	});
	
};
