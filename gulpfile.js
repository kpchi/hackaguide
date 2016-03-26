var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('sass', function() {
    return sass('sass/main.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    gulp.watch('sass/*.scss', ['sass']);
});

gulp.task('default', ['sass']);
