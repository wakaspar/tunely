var express = require('express');
var app = express();


// database linked
var db = require('./models');

// controllers linked
var controllers = require('./controllers');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', function homepage(req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

app.get('/api', controllers.api.index);
app.get('/albums', controllers.albums.show);

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
