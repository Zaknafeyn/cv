var gulp = require('gulp');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var webserver = require('gulp-webserver');
var gutil = require('gulp-util');
var fs = require('fs');
var prettify = require('gulp-prettify');
var sass = require('gulp-sass');


gulp.task('default', ['webserver', 'watchSass']);

gulp.task('watchSass', function() {
	gulp.watch('./scss/*.scss', ['sass']);
});

//end build pages for HW2

gulp.task('webserver', function() {
	gulp.src('./')
		.pipe(webserver({
			livereload: true,
			directoryListing: {
				enable: true,
			},
			open: true
		}));
});

gulp.task('sass', function() {
	gulp.src('./scss/*.scss')
		.pipe(sass())
		.on('error', swallowError)
		.pipe(gulp.dest('./css'));
});

function swallowError(error) {
	//If you want details of the error in the console
	console.log(error.toString());
	this.emit('end');
}