'use strict';

var $ = require('gulp-load-plugins')();
var gulp = require('gulp');

module.exports = function() {

  return gulp.src('./styles/**/*.scss')
    .pipe($.sass().on('error', $.sass.logError))
    .pipe(gulp.dest('./build/assets/styles'));
};
