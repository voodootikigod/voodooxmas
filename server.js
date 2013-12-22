var DEVICE_ID = process.env.DEVICE_ID;
var ACCESS_TOKEN = process.env.ACCESS_TOKEN;
var request = require("request");
var SPARK = 'https://api.spark.io';

var express = require('express');
var app = express();

app.get('/toggle', function(req, res){
  request.post({url: SPARK+"/v1/devices/"+DEVICE_ID+"/toggle", body: {}}, function (e, r, body) {
    console.log(body);
    res.send("OK");
  });
});

app.listen(process.env.PORT || 3000);