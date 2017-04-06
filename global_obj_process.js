process.on('exit', function(code) {

    setTimeout(function() {
        console.log("The code will not be executed!");
    }, 0);

    console.log('return code is: ', code);
});

console.log("Program finished");
