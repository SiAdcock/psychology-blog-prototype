'use strict';

var gulp = require('gulp');
var clean = require('./tasks/clean');
var sass = require('./tasks/sass');
var watch = require('./tasks/watch');

gulp.task('sass', sass);
gulp.task('clean', clean);
gulp.task('build', ['clean', 'sass']);
gulp.task('watch', watch);
