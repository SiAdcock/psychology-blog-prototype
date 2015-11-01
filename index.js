'use strict';

var express = require('express');
var fs = require('fs');
var favicon = require('serve-favicon');
var server = express();

server.use(favicon(__dirname + '/favicon.ico'));
server.use('/', function(req, res) {
  var html = fs.readFileSync('./index.html', 'utf8');

  res.send(html);
});

server.listen(9000);
console.log('Server listening, got to http://localhost:9000');
