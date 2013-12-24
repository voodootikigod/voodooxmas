var DEVICE_ID = process.env.DEVICE_ID;
var ACCESS_TOKEN = process.env.ACCESS_TOKEN;
var request = require("request");
var SPARK = 'https://api.spark.io';

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/toggle', function(req, res){
  request({url:  SPARK+"/v1/devices/"+DEVICE_ID+"/toggle", method: "POST", form: {access_token: ACCESS_TOKEN}}, function (e, r, body) {
    res.redirect("/");
  });
});

app.get("/", function (req, res) {

  // gather status and then display it
  request({url:  SPARK+"/v1/devices/"+DEVICE_ID+"/status", method: "POST", form: {access_token: ACCESS_TOKEN}}, function (e, r, body) {
    body = (JSON.parse(body));
    // display the status (line page writer).
    res.send("<html><head><title>Voodoo Lights</title><meta name='apple-mobile-web-app-capable' content='yes' /><link rel='stylesheet' href='//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css'></head><body style='text-align: center'><h1>Lights "+(body.return_value == 1 ? "ON" : "OFF")+"</h1><br/><br/><br/><br/><a class='btn btn-default' href='/toggle'>Switch</a></body></html>");
  });
})

app.listen(process.env.PORT || 3000);