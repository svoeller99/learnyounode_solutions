var http = require('http'),
    map = require('through2-map'),
    port = process.argv[2];

http.createServer(function(req, res){
    if(req.method !== 'POST') {
        res.end("not a POST\n");
    }

    res.writeHead(200);
    req.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(res);
}).listen(port);