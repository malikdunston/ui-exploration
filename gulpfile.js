'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

var SCSS_WATCH = './assets/scss/**/*.scss';
var SCSS_SRC = './assets/scss/index.scss';
var SCSS_DEST = './';

function compile_scss() {
	return gulp.src(SCSS_SRC)
		.pipe(sass().on('error', sass.logError))
		.pipe(minifyCSS())
		.pipe(rename({suffix: '.min'}))
		.pipe(changed(SCSS_SRC))
		.pipe(gulp.dest(SCSS_DEST));
};

function watch_scss() {
	gulp.watch(SCSS_WATCH, compile_scss);
};

gulp.task('default', gulp.parallel(watch_scss));

exports.compile_scss = compile_scss;
exports.watch_scss = watch_scss;
