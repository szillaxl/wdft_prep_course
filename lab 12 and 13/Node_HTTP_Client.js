const http = require('HTTP');

const connection = {
hostname: "brainstation.io",
path:'',
method: 'GET', 
port: 80
}

console.log(connection);

const request = http.get(connection, function(response){
    console.log ('HEADERS: ' + JSON.stringify(response.headers));
    let body = "";
    
    if (response.statusCode == 200) {

            response.on ('data', junk =>{

            })
    }
})