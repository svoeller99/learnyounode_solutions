var fs = require('fs')
  , fileName = process.argv[2];
fs.readFile(fileName, 'utf8', function(err, data){
	console.log(data.split('\n').length-1);
});