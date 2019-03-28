'use strict';

module.exports = function() {
  $.gulp.task('copy:fonts', function() {
    return $.gulp.src($.config.src + '/fonts/*.*')
      .pipe($.gulp.dest($.config.root + '/assets/fonts'));
  });
};

// module.exports = function() {
//   $.gulp.task('copy:picture', function() {
//     return $.gulp.src('./source/pictures/**/*.*', { since: $.gulp.lastRun('copy:picture') })
//     	.pipe($.gp.imagemin())
//       .pipe($.gulp.dest($.config.root + '/assets/pics'));
//   });
// };