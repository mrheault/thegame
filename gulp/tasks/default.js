var browserSync = require('browser-sync');


module.exports = function (gulp, $, config) {

  var paths = config.paths;

  // Forget any cached data
  // Reference: https://github.com/gulpjs/gulp/blob/master/docs/recipes/incremental-builds-with-concatenate.md
  function forget (cacheName) {
    return function (e) {
      if (e.type === 'deleted') {
        $.remember.forget(cacheName, e.path);
        delete $.cached.caches[cacheName][e.path];
      }
    };
  }

  gulp.task('server', [ 'compile' ], function () {
    browserSync({
      server: {
        baseDir: [
          paths['static'],
          paths['temp']
        ]
      },
      ghostMode: false,
      notify: false
    });
  });

  gulp.task('watch', function () {
    gulp.watch(paths['scripts'], [ 'compile:js' ])
      .on('changed', forget('scripts'));

    gulp.watch(paths['less'],      [       'compile:css' ]);
    gulp.watch(paths['templates'], [ 'compile:templates' ]);
  });

  gulp.task('default', [
    'server',
    'watch'
  ]);

};
