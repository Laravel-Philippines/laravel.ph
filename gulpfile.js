// Mix's webpack.mix.js
const { mix } = require('laravel-mix');
const gulp = require('gulp');

gulp.task('default', function() {

	mix.js('resources/js/app.js', 'public/js')
	   .sass('resources/sass/app.scss', 'public/css');

});


