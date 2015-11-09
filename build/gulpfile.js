var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('style', function(){
	    gulp.src('scss/**/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('../public/assets/css/'));
});