var fs = require('fs');

module.exports = function(dirName, ext, callback) {
	var result = []
      , extMatcher = new RegExp("^.*\\."+ext+"$");
	fs.readdir(dirName, function(err, ls){
		if(err) {
			callback(err);
			return;
		}
		ls.forEach(function(fileName) {
			if(fileName.match(extMatcher)) {
				result.push(fileName);
			}
		});
		callback(null, result);
	});
};