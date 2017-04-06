var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.send('Hello World! I am logo.png in express.');
})

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Application example, access URL http://%s:%s", host, port)
})
