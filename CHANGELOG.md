Change Log
==========

##  v0.9.1
*   Added the "states-module" key of the Yeoman configuration file.

##  v0.9.0
*   Bumped all dependencies to their latest versions.
*   Updated to ESLint v2.
*   Added Babel preset 'stage-2'.
*   Changed several aspects of the sample game code.

##  v0.8.0
*   Simplified code bundling logic.
*   Split Phaser from distributed game code.
*   Changed app directory structure.
*   Dropped Audio Sprite generation support.

##  v0.7.3
*   Upgraded to `browserify@^13.0.0`.
*   Upgraded `babel-runtime` to its latest version.
*   Added a `.yo-rc.json` config file for compatibility with
    `generator-phaser-plus`.

##  v0.7.2
*   Added missing `babel-runtime` dependency.
*   Raised the minimum version of all Babel dependencies.

##  v0.7.1
*   Added `babel-plugin-transform-runtime`.

##  v0.7.0
*   Removed LESS support.
*   Removed Handlebars support.
*   Changed game source code directory.
*   Removed some public fields from `package.json` metadata.
*   Upgraded to `gulp-load-plugins@^1.0.0`.
*   Removed `estraverse` dependency.
*   Upgraded to `browserify@12.0.0`.
*   Upgraded to Babel 6.
*   Merged configuration modules under a single file.

##  v0.6.2
*   Added `estraverse` as a development dependency to avoid an issue introduced
    by `npm@3` that conflicts the Browserify and ESLint package dependencies.

##  v0.6.1
*   Replaced deprecated task plugin `autoprefixer-core` with latest version of
    `autoprefixer`.

##  v0.6.0
*   Rebranded project as `phaser-plus-template`.
*   Added Audio Sprite generation support using `audiosprite` package.
*   Removing application cache support.
*   Upgraded some task plugins.

##  v0.5.1
*   Removed the Babel runtime transformation pass, falling back to the global
    polyfill instead.

##  v0.5.0
*   Added Browserify support, with Watchify for live development.
*   Removed Bower in favor of npm packages.
*   Updated ESLint rule-set file to be less restrictive.
*   Updated sample game code.

##  v0.4.1
*   Upgraded to install Phaser v2.4.2 (or greater in 2.4.x development line).
*   Upgraded to ESLint v1.0.0.
*   Updated the ESLint rules files to fix some rules replaced in v1.0.0.
*   Upgraded some Gulp plug-ins to their latest versions.

##  v0.4.0
*   Removed old, unmaintained sample game ZIP archive.
*   Replaced JSHint by ESLint.

##  v0.3.3
*   Upgraded plugin `jshint-stylish` to v2.0.0.
*   Cleared some deprecated and unused JSHint rules from their respective
    configuration files.

##  v0.3.2
*   Updated BrowserSync usage.
*   Minor documentation changes.

##  v0.3.1
*   Upgraded `gulp-load-plugins`.

##  v0.3.0
*   Sample game replaced by a simpler application.
*   Including a ZIP file, containing the old sample game.

##  v0.2.2
*   Upgraded to Babel v5.0.0.
*   Upgraded plugin `gulp-postcss` to v5.0.0.

##  v0.2.1
*   Use `gulp-hb` to compile templates.
*   Move template data to project source.

##  v0.2.0
*   Upgraded Phaser to version 2.3.0.
*   Phaser is now the first dependency declared in the `bower.json` manifest,
    avoiding some issues with Almond and Phaser's P2 physics engine build
    incompatibilities.
*   Tasks and accompanying library asset are now encapsulated in a single
    module structured under the `gulpfile.js` directory.
*   Not relying on `gulp-plumber` to handle errors in tasks anymore.
*   `run-sequence` was dropped, in favor of proper sequential task
    dependencies (to be improved in a future Gulp 4.0 release).
*   Spread the project configuration into CommonJS modules.
*   Updated Favicons and related stuff.

##  v0.1.9
*   Upgrading gulp plugins: `gulp-load-plugins`, `require-dir`
*   Return `Promise`s from storage plugin
*   Expose game states through a module, add them dynamically
*   New: `SplashScreen` class
*   Simplify game launching code
*   Renaming web application manifest file

##  v0.1.8
*   Upgrade some gulp plugin versions

##  v0.1.7
*   Upgrade task plug-in `gulp-processhtml`

##  v0.1.6
*   Make incremental builds actually work
*   Remove obsolete Babel `format` option from project configuration
*   Update mentions to Babel in project metadata and README, some other minor 
    changes
*   Use `gulp-filter` instead of `gulp-if` when filtering bundled scripts
*   Upgrade `gulp-minify-css`

##  v0.1.5
*   Upgrade plug-in `gulp-less`
*   Replacing 6to5 by Babel, due to the project name change.

##  v0.1.4
*   Upgrade to BrowserSync 2.0

##  v0.1.3
*   Solve issue #1, where 6to5 may compile code with syntax errors formatted 
    with the `compact` option (thanks @dfyx)

##  v0.1.2
*   Reverted game states to class instances
*   Upgraded some development dependencies, 6to5

##  v0.1.1
*   Force UTF-8 encoding by default in new files
*   Comments as hints in task files
*   Avoid including non-JS files in `bundle.js`
*   Crediting @Eruant in the README
*   Dependency upgrades

##  v0.1.0
First public release, including:
*   6to5
*   Almond runtime dependency tracker
*   Bower component manager
*   BrowserSync development web server
*   EditorConfig support
*   Gulp task manager
*   Handlebars templates
*   JSHint code quality check support
*   LESS style sheets
*   Mozilla's localForage, with sample wrapper plugin
*   Offline Cache support in final builds
*   Phaser v2.2 game development framework
*   The sample game "My Awesome Game"
*   Early project configuration support
