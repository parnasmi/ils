'use strict';

module.exports = function() {
  $.gulp.task('copy:image', function() {
    return $.gulp.src($.config.src + '/images/**/*.*', { since: $.gulp.lastRun('copy:image') })
    	// .pipe(imagemin())
    	// .pipe($.gp.imagemin())
      .pipe($.gulp.dest($.config.root + '/assets/img'));
  });
};
