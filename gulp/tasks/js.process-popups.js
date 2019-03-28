'use strict';

module.exports = function() {
  $.gulp.task('js:process.popups', function() {
    return $.gulp.src($.path.popups)
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('popups.js'))
      // .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};
