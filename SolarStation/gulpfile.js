'use strict';

global.$ = {
    dev: true,
    package: require('./package.json'),
    config: require('./gulp/config'),
    path: {
        task: require('./gulp/paths/tasks.js'),
        jsFoundation: require('./gulp/paths/js.foundation.js'),
        cssFoundation: require('./gulp/paths/css.foundation.js'),
        app: require('./gulp/paths/app.js')
    },
    gulp: require('gulp'),
    del: require('del'),
    merge: require('merge-stream'),
    browserify: require('browserify'),
    source: require('vinyl-source-stream'),
    buffer: require('vinyl-buffer'),
    babel: require('babelify'),
    browserSync: require('browser-sync').create(),
    fs: require('fs'),
    gp: require('gulp-load-plugins')({
        rename: {
            'gulp-replace-task': 'replaceTask'
        }
    })
};

$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'sprite:svg',
        'sprite:png',
        'sass',
        'pug',
        'js:foundation',
        'js:process',
        'copy:vendor',
        'copy:image',
        'copy:fonts',
        'copy:data',
        'css:foundation'
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )
));