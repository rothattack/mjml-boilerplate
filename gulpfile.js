var gulp = require('gulp')
var mjml = require('gulp-mjml')
var browserSync = require('browser-sync');

// Creates a localhost server
var server = function() {
	browserSync({
		server: {
			baseDir: ['./html']
		},
		startPath: ''
	})
}

// Render our MJML to HTML
gulp.task('build', function() {
  return gulp.src('./mjml/**/*.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('./html'))
})

// Launch our HTML after rendering
gulp.task('default', gulp.series('build', function() {
	server();
	gulp.watch('./mjml/**/*.mjml')
		.on('change', gulp.series('build', browserSync.reload))
}))