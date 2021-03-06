'use strict';

module.exports = function() {
  $.gulp.task('pug:one', function() {
		let locals = require('../../content.json');
		return $.gulp.src($.config.src + '/template/pages/feedbacks-page-popups.pug')
			.pipe($.gp.pug({ pretty: true, locals: locals }))	
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Pug',
          message:  error.message
        }
       }))
      .pipe($.gulp.dest($.config.root));
  });
};
