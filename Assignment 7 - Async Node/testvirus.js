var fs = require ('fs');
var readableStream = 
fs.createReadStream('quote.txt');
var data= '';

readableStream.on('data',
 function(chunk) {
 data+=chunk;
});
readableStream.on('end', function() {
 console.log(data);
});

//look into this
//pipe and streams


var fs = require('fs');
var readableStream =
fs.createReadStream('quote.txt');
var writableStream =
fs.createWriteStream('quote2.txt');
//Single Pipe
readableStream.pipe(writableStream);
