var http = require('http'),
    fs = require('fs'),
    port = process.argv[2],
    fileName = process.argv[3];

http.createServer(function(req, res){
    res.writeHead(200);
    fs.createReadStream(fileName).pipe(res);
}).listen(port);
