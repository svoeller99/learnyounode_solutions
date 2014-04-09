var express = require('express'),
    app = express();

app.get('/api/parsetime', function(req, res){
    timeResponder(req, res, function(dtm){
        return {
            hour : dtm.getHours(),
            minute : dtm.getMinutes(),
            second : dtm.getSeconds()
        };
    });
});

app.get('/api/unixtime', function(req, res){
    timeResponder(req, res, function(dtm){
        return {
            unixtime : dtm.getTime()
        };
    });
});

function timeResponder(req, res, responseBuilder) {
    res.set("Content-Type", "application/json");
    var iso = req.query.iso,
        dtm = new Date(iso),
        response = responseBuilder(dtm);
    res.send(200, JSON.stringify(response));
}

app.listen(process.argv[2]);