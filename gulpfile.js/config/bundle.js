/*
 * Browserify bundle configuration.
 * ============================================================================
 */

'use strict';


module.exports = {

  debug: true,
  standalone: 'app',
  entries: [ 'src/index' ],
  transform: [ 'babelify' ]

};
