var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));
app.use(bodyParser());

app.get('/', function (req, res) {
  res.send('Hello World!');
});


var days = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];

var serviceDays = days.slice(0);

app.post('/remove/day', function (req, res) {
  console.log(req.body);
  console.log(days);
  console.log(serviceDays);
  if (serviceDays.length > 2) {
    serviceDays.splice(serviceDays.indexOf(req.body.day), 1);

    res.json(serviceDays);
  } else {
    res.json(400, {msg:'이틀만 남아 있습니다.'});
  }
});

app.get('/reset/days', function (req, res) {
  serviceDays = days.slice(0);
  res.json(serviceDays);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
