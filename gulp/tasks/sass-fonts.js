'use strict';

module.exports = function() {
  $.gulp.task('sass-fonts', function() {
    return $.gulp.src($.config.src + '/style/fonts.scss')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass({
      	outputStyle: 'expanded'
      })).on('error', $.gp.notify.onError({ title: 'Style' }))
      .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
      // .pipe($.gp.sourcemaps.write())
      .pipe($.gp.csso())
      .pipe($.gulp.dest($.config.root + '/assets/css'))
      .pipe($.browserSync.stream());
  })
};
