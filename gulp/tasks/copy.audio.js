'use strict';

module.exports = function() {
  $.gulp.task('copy:audio', function() {
    return $.gulp.src($.config.src + '/audio/*.*', { since: $.gulp.lastRun('copy:audio') })
    	// .pipe(imagemin())
    	// .pipe($.gp.imagemin())
      .pipe($.gulp.dest($.config.root + '/assets/audio'));
  });
};
