var express = require ('express')
var app = express ()

app.use(express.static('public'))


app.get('/test', function (req, res){
    res.send ('<p>Test Page</p>')
})

app.get('/name', function (req, res){
    res.send ('<p>Sholan</p>')
})

app.get('/sum', function (req, res){

    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    var c = parseInt(req.query.c);
    sum = a + b + c;

    res.send (sum.toString())
})

app.get('/color', function (req, res){
    let color = {
 red: 0,
 green: 79,
 blue: 255
};
    res.send (color)
})

app.listen (3000, function () {
console.log('listening on port 3000')
})