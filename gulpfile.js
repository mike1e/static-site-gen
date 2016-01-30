// gulpfile.js
var gulp        = require('gulp');
var browserSync = require('browser-sync');

gulp.task('serve', function() {
    console.log('running server');
    browserSync({
        server: {
            baseDir: 'app'
        }
    });
});

//default task to be run with gulp
gulp.task('default', ['serve']);
