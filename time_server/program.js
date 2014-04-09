var net = require('net'),
    strftime = require('strftime');

var server = net.createServer(function(socket){
    var dtm = new Date();
    socket.write(strftime("%F %H:%M", dtm));
    socket.end();
});
server.listen(process.argv[2]);