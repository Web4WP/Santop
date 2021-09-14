const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

module.exports = function imageMin() {
  return gulp.src("src/img/**/*.{gif,png,jpg,svg,webp,ico}")
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({
        quality: 85,
        progressive: true
      }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ]))
    .pipe(gulp.dest("build/img"))
}
