var fs = require('fs');

console.log("Prepare to open file!");
fs.stat('input_tmp.txt', function(err, status) {
    if(err) {
        return console.error(err);
    }

    console.log(status);
    console.log("Read file info successfully!");

    console.log("isFile?: " + status.isFile());
    console.log("isDirectory?: " + status.isDirectory());
});
