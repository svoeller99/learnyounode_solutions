var fs = require('fs')
  , dirName = process.argv[2]
  , ext = process.argv[3]
  , extMatcher = new RegExp("^.*\\."+ext+"$");
fs.readdir(dirName, function(err, ls){
	ls.forEach(function(fileName) {
		if(fileName.match(extMatcher)) {
			console.log(fileName);
		}
	});
});