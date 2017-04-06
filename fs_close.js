var fs = require("fs");
var buf = new Buffer(1024);

console.log("Prepare opening exist file!");
fs.open('input.txt', 'r+', function(err, fd) {
    if(err) {
         return console.error(err);
    }

    console.log("File open sucessfully!");
    console.log("Prepare reading file: ");
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){        if(err) {
            console.log(err);
        }

        console.log(bytes + " bytes are read");

        if(bytes > 0) {
            console.log(buf.slice(0, bytes).toString());
        }

        fs.close(fd, function(err) {
            if(err) {
                 console.log(err);
            }
            console.log("File close successfully");
        });
    });
});
