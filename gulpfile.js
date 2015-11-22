var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
 
gulp.task('default', function() {
	return gulp.src('css_source/main.css')
	.pipe(autoprefixer('last 15 version'))
	.pipe(gulp.dest('css'))
});

gulp.task('watch', function() {
	return gulp.watch('css_source/*.css', ['default']);
});