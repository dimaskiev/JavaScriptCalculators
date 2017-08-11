'use strict';

module.exports = function() {
    $.gulp.task('copy:vendor', function() {
        return $.gulp.src('./source/vendor/**/*.js', { since: $.gulp.lastRun('copy:data') })
            .pipe($.gulp.dest($.config.root + '/assets/js'));
    });
};