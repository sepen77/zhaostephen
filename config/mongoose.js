var mongoose = require('mongoose');

module.exports = function() {
	var db = mongoose.connect('mongodb://localhost/zhaostephen');
	return db;
};