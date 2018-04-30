var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('src/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'));
});

gulp.task('watch', ['sass'], function () {
  gulp.watch('src/sass/**/*.sass', ['sass'])
});

gulp.task('default', ['watch']);