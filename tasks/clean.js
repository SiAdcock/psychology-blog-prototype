'use strict';

var shelljs = require('shelljs');

module.exports = function() {
  shelljs.rm('-rf', './build');
};
