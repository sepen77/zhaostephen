var path = require('path');

module.exports = function(app){
	app.get('/', function(req, res) {
    	res.sendFile(path.resolve(__dirname + '/../public/index.html'));
	});

	app.get('/downloads/Resume/', function(req, res){
		console.log('sending resume...');
		res.sendFile(path.resolve(__dirname + '/../res/StephenZhao_RE_v201601141715_v16.pdf'));
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

	return app;
};
