var http = require('http');
var querystring = require('querystring');

var postHTML =
    '<html><head><meta charset="utf-8"><title>newbie tutorial node.js example</title></head>' +
    '<body>' +
    '<form method="post">' +
    'Website name: <input name="name"><br>' +
    'Website URL: <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer(function(req, res){
    var body = '';

    req.on('data', function(chunk){
        body += chunk;
    });

    req.on('end', function(){
        body = querystring.parse(body);
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});

        if(body.name && body.url) {
            res.write("Website name: " + body.name);
            res.write("<br>");
            res.write("Website URL: " + body.url);
        } else {
              res.write(postHTML);
        }
        res.end();
    });
}).listen(3000);
