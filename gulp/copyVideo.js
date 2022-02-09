const gulp = require('gulp')

module.exports = function fonts() {
  return gulp.src('src/video/*')
    .pipe(gulp.dest('build/video'))
}
