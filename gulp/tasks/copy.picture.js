'use strict';

module.exports = function() {
  $.gulp.task('copy:picture', function() {
    return $.gulp.src($.config.src + '/pictures/**/*.*', { since: $.gulp.lastRun('copy:picture') })
    	// .pipe($.gp.imagemin())
      .pipe($.gulp.dest($.config.root + '/assets/pics'));
  });
};
