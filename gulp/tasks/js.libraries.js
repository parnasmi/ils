'use strict';

module.exports = function() {
  $.gulp.task('js:libs', function() {
    return $.gulp.src($.path.libsFoundation)
      .pipe($.gp.concat('libs.js'))
      .pipe($.gp.uglify())
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};