// require config files
var config = require('./config/config'),
	mongoose = require('./config/mongoose'),
	express = require('./config/express');

// init app and database
var db = mongoose(),
	app = express();
	
// start listening
app.listen(config.port);

// export app
module.exports = app;

// log server start
console.log('Server running at http://localhost:'+config.port);