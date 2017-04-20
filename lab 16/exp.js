var express = require ('express')
var app = express ()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded)

app.get('/', function (req, res){
    res.send ('<h1>Hello World</h1>')
})


app.get('/goodbye', function (req, res){
    res.send ('<h1>Goodbye World</h1>')
})


app.post('/', function (req, res){
    console.log(req.body);
    res.send ('<h1>TEST</h1>')
})


app.listen (3000, function () {
console.log('Example app listening on port 3000');
})