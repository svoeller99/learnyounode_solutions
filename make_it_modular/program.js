var filteredls = require('./filteredls')
  , dirName = process.argv[2]
  , ext = process.argv[3];

filteredls(dirName, ext, function(err, data) {
	if(!err) {
		data.forEach(function(fileName){
			console.log(fileName);
		});
	}
});