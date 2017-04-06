var fs = require("fs");

console.log("Prepare to write file");
fs.writeFile('input.txt', 'it is content to be written!', function(err) {
    if(err) {
        return console.error(err);
    }

    console.log("Data written successfully!");
    console.log("-------- seperator --------");
    console.log("Read written data!");

    fs.readFile('input.txt', function(err, data) {
        if(err) {
            return console.error(err);
        }

        console.log("Async read data: " + data.toString());
    });
});
