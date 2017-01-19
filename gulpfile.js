var gulp   = require('gulp');
var sass   = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var csscomb = require('gulp-csscomb');
var cssmin = require('gulp-cssmin');


gulp.task("sass", function() {
  return gulp.src("./assets/sass/**/*.scss")
    .pipe(sass({
      includePaths: ['./assets/sass'],
      errLogToConsole: true,
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer("last 2 version", "ie 8", "ie 7"))
    .pipe(csscomb())
    .pipe(cssmin())
    .pipe(gulp.dest("./static/assets/css"));
});


gulp.task('watch', ['sass'], function(){
  gulp.watch('./assets/sass/**/*.scss', ['sass']);
});


gulp.task('build', ['sass']);
gulp.task('default', ['watch']);
