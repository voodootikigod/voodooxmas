var DEVICE_ID = process.env.DEVICE_ID;
var ACCESS_TOKEN = process.env.ACCESS_TOKEN;
var request = require("request");
var SPARK = 'https://api.spark.io';

var express = require('express');
var app = express();

app.get('/toggle', function(req, res){
  request({url:  SPARK+"/v1/devices/"+DEVICE_ID+"/toggle", method: "POST", form: {access_token: ACCESS_TOKEN}}, function (e, r, body) {
    body = (JSON.parse(body));
    console.log(body);
    if (body.return_value == 0) {
      res.send("Lights ON");
    } else {
      res.send("Lights OFF");
    }
  });
});

app.get("/", function (req, res) {
  request({url:  SPARK+"/v1/devices/"+DEVICE_ID+"/status", method: "POST", form: {access_token: ACCESS_TOKEN}}, function (e, r, body) {
    body = (JSON.parse(body));
    console.log(body);
    if (body.return_value == 0) {
      res.send("Lights ON");
    } else {
      res.send("Lights OFF");
    }
  });
})

app.listen(process.env.PORT || 3000);