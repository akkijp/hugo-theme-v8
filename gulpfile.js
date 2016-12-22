var gulp   = require('gulp');
var sass   = require("gulp-sass");


gulp.task("sass", function() {
  return gulp.src("./assets/sass/**/*.scss")
    .pipe(sass({
      includePaths: ['./assets/sass'],
      errLogToConsole: true,
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest("./static/assets/css"));
});


gulp.task('watch', ['sass'], function(){
  gulp.watch('./assets/sass/**/*.scss', ['sass']);
});


gulp.task('build', ['sass']);
gulp.task('default', ['watch']);
