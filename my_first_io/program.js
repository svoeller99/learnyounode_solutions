var fs = require('fs')
  , fileName = process.argv[2]
  , buff = fs.readFileSync(fileName)
  , contents = buff.toString();
console.log(contents.split("\n").length-1);