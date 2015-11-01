'use strict';

var express = require('express');
var fs = require('fs');
var favicon = require('serve-favicon');
var path = require('path');
var serveStatic = require('serve-static');
var server = express();

server.use('/build', serveStatic('build'));
server.use(favicon(path.join(__dirname, '/favicon.ico')));
server.use('/', function(req, res) {
  var html = fs.readFileSync('./index.html', 'utf8');

  res.send(html);
});

server.listen(9000);
console.log('Server listening, got to http://localhost:9000');
