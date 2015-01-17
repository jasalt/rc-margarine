//var http = require('http');
var express = require('express');
var app = express();

var SerialPort = require("serialport").SerialPort;
var serialPort = new SerialPort("/dev/cu.usbmodemfd121", {
    baudrate: 9600
});

app.get('/', function(req, res) {
    serialPort.write('0');
    res.send('wrote 0');
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
