var port = 3000;

// require config files
var mongoose = require('./config/mongoose'),
	express = require('./config/express');

// init app and database
var db = mongoose(),
	app = express();
	
// start listening
app.listen(port);

// export app
module.exports = app;

// log server start
console.log('Server running at http://localhost:'+port);