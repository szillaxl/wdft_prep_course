const http = require('http');
const fs = require('fs');

const request = http.get('http://stackoverflow.com', (response) => {
    let body = "";

    response.on('data', (chunk) => {
        body += chunk;
    });

    response.on('end', () => {
        if (response.statusCode === 200) {
            try {
                console.log((body));
            } catch (e) {
                console.log('Error!');
            }
        }
        fs.writeFile('brainstation.html', body, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    });
});


var readableStream =
fs.createReadStream('brainstation.txt');
var writableStream =
fs.createWriteStream('brainstation.html');
readableStream.pipe(writableStream);
