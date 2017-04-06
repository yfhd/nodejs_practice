var fs = require("fs");

fs.readFile('input.txt', function(err, data) {
    if(err) {
        return console.error(err);
    }

    console.log("Asnc read: " + data.toString());
});

var data = fs.readFileSync('input.txt');
console.log("Sync read: " + data.toString());

console.log("Program finished!");
