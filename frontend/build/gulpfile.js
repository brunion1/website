var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');

gulp.task('styles', function(){
	gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('../dist/assets/css/'));
});

gulp.task('build', function(){
	gulp.src('../app/**/*.js')
		.pipe(gulp.dest('../dist/app'))
});

gulp.task('clean-dist', function(){
	gulp.src('../dist/')
		.pipe(clean({force:true}));
});