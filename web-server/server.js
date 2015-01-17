//var http = require('http');
var express = require('express');
var app = express();
var url = require('url');

var SerialPort = require("serialport").SerialPort;
var serialPort = new SerialPort("/dev/cu.usbmodemfa131", {
    baudrate: 9600
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var controlVals = {
    forward: '0',
    left: '1',
    right: '2'
};

app.get('/control', function(req, res, next) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    console.log(query);

    serialPort.write(controlVals[query.direction]);
    res.send(controlVals[query.direction]);
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
