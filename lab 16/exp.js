var express = require ('express')
var app = express ()

app.get('/', function (req, res){
    res.send ('<h1>Hello World</h1>')
})


app.get('/goodbye', function (req, res){
    res.send ('<h1>Goodbye World</h1>')
})

app.listen (3000, function () {
console.log('Example app listening on port 3000')
})