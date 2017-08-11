'use strict';

module.exports = function() {
    $.gulp.task('copy:data', function() {
        return $.gulp.src('./source/data/**/*.json', { since: $.gulp.lastRun('copy:data') })
            .pipe($.gulp.dest($.config.root + '/data'));
    });
};