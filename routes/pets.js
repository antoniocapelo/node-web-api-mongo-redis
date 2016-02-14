var r = require('request').defaults({
    json: true
});

var async = require('async');

module.exports = function(app) {
    /* Read */

    app.get('/pet', function(req, res) {
        async.parallel({
            dog: function(cb) {
                r({uri: 'http://localhost:3001/dog'}, function(error, response, body) {
                    if(error) {
                        cb({service: 'dog', error: error});
                        return;
                    }

                    if (response.statusCode === 200) {
                        cb(null, body);
                    } else {
                        cb(response.statusCode);
                    }
                });
            },
            cat: function(cb) {
                r({uri: 'http://localhost:3002/cat'}, function(error, response, body) {
                    if(error) {
                        cb({service: 'cat', error: error});
                        return;
                    }

                    if (response.statusCode === 200) {
                        cb(null, body);
                    } else {
                        cb(response.statusCode);
                    }
                });
            }
        },
            function(err, results) {
                console.log('aqui');

                for( var x = 0, y; x < 1000000000; x++) {
                    y = y+x;
                }

                res.json({
                    error: err,
                    results: results
                });
            }
        )
    });

    app.get('/ping', function(req, res) {
        res.json({pong: Date.now()})
    });
}
