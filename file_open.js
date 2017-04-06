var fs = require("fs");

console.log("Prepare to open file!");
fs.open('input.txt', 'r+', function(err, fd) {
    if(err) {
        return console.error(err);
    }

    console.log("Open file successfully!");
});
