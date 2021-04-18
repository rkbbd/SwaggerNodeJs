let swaggerDoc = require('./swaggerDocs.js');

var express = require('express');
var routes = require('./route'); //importing route

var app = express();
routes(app); //register the route

swaggerDoc(app);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('app listening on port 3000!');
});
