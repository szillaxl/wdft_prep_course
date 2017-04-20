var express = require ('express')
var app = express ()

app.get('/name', function (req, res){
    res.send ('Sholan')
})

app.get('/sum', function (req, res){
    res.send ('sum')
})

app.get('/color', function (req, res){
    res.send ('color')
})

app.listen (3000, function () {
console.log('listening on port 3000')
})