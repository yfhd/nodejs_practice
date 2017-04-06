var buffer1 = new Buffer('newbie tutorial ');
var buffer2 = new Buffer('www.runoob.com');
var buffer3 = Buffer.concat([buffer1, buffer2]);

console.log("content of buffer3: " + buffer3.toString());
