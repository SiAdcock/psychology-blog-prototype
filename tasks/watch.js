'use strict';

var gulp = require('gulp');
var path = require('path');

module.exports = function() {
  gulp.watch(path.join('styles', '/**/*.scss'), ['sass']);
};
