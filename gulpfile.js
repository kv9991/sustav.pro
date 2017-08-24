var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var cssmin = require('gulp-cssmin');
var moduleImporter = require('sass-module-importer');

var AUTOPREFIXER_BROWSERS = [];

//sass
gulp.task('sass', function () {
  gulp.src('./css/main.sass')
  	.pipe(sourcemaps.init())
  	.pipe(sass({
  	  outputStyle: 'expanded',
  	  importer : moduleImporter()
  	}).on('error', sass.logError))
  	.pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
  	.pipe(cssmin())
  	.pipe(sourcemaps.write('./maps'))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('static/'));
});

// Default task
gulp.task('default', function () {
  gulp.start('sass');
});