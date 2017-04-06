var express = require('express');
var app = express();

app.get('/', function(req, res) {
    console.log("Page GET request");
    res.send('Hello GET');
})

app.post('/', function(req, res) {
    console.log("Page POST request");
    res.send('Hello POST');
})

app.get('/del_user', function(req, res) {
    console.log("/del_user response DELETE request");
    res.send('Delete page');
})

app.get('/list_user', function(req, res) {
    console.log("/list_user GET request");
    res.send('User list page');
})

app.get('/ab*cd', function(req, res) {
    console.log("/ab*cd GET request");
    res.send('regular expression');
})

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Application example, access URL http://%s:%s", host, port)
})
