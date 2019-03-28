'use strict';

module.exports = function() {
  $.gulp.task('sass', function() {
    return $.gulp.src($.config.src + '/style/style.scss')
      .pipe($.gp.sourcemaps.init())
			.pipe($.gp.sass())
			.on('error', $.gp.notify.onError({ title: 'Style' }))
      // .pipe($.gp.sourcemaps.write({includeContent: false}))
        // .pipe($.gp.sourcemaps.init({loadMaps: true}))
      .pipe($.gp.autoprefixer(['last 15 versions']))
      // .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/assets/css'))
      .pipe($.browserSync.stream());
  })
};
