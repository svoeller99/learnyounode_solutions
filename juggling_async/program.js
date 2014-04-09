var bl = require('bl')
  , http = require('http')
  , urls = process.argv.slice(2)
  , receivedCount = 0
  , dataBuckets = [];

urls.forEach(function(url, idx){
    http.get(url, function(response) {
        response.pipe(bl(function(err, data){
            if(err) {
                console.error(err);
                return;
            }
            dataBuckets[idx] = data.toString();
            receivedCount++;

            if(receivedCount === urls.length) {
                dataBuckets.forEach(function(d) {
                    console.log(d);
                })
            }
        }));
    });
});