var express = require('express');
var fs = require('fs');
var app = express();

var msg = process.env.APP_MSG;

var response;

app.get('/', function (req, res) {
    res.status(200);
    res.send('Hello world');
});

app.get('/healthz', function (req, res) {
    res.status(200);
    res.send();
});

app.get('/ready', function (req, res) {
    res.status(200);
    res.send();
});


app.get('/healthz-ko', function (req, res) {
    res.status(400);
    res.send();
});

app.get('/ready-ko', function (req, res) {
    res.status(400);
    res.send();
});







app.listen(8080, function () {
  console.log('Server listening on port 8080!');
});
