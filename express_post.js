var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/express_post.htm', function(req, res) {
    res.sendFile(__dirname + "/" + "express_post.htm");
})

app.post('/process_post', urlencodedParser, function(req, res) {
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Application example, access URL http://%s:%s", host, port)
})
