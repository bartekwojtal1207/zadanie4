var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');

gulp.task('sass', function() {
    gulp.src('assets/sass/main.scss')
        .pipe(sass({style: 'expanded'}))
        .on('error', gutil.log)
        .pipe(gulp.dest('assets/css'))
});