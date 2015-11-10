Phaser Plus Template
====================

>   A complete project template for developing [Phaser][phsr] web games
>   including Browserify, BrowserSync and more.


Batteries Included
------------------

*   [Gulp][gulp] task manager, to handle development and distribution tasks,
    with alternative npm scripts provided.

*   [BrowserSync][bsnc] development server for cross-device testing.

*   [Browserify][brsy] support for easier management of components and
    dependency tracking.

*   [Babel][babl] to compile scripts written in ECMAScript 2015 (and future
    specs) into scripts compatible with today's browsers. Check which [language
    features][feat] are currently supported.

*   [EditorConfig][edcf] support, for consistent editor configuration between
    collaborators — check if EditorConfig support is available for your code
    editor.

*   [ESLint][eslt] for code quality check.

*   Customizable scripts for automated [Audio Sprites][ausp] generation
    (Requires [FFMpeg][ffmp]).


Development Instructions
------------------------

Download and extract the [packaged project][dwld] contents, or clone this
repository locally. Either way, the following npm scripts are available to you,
performing the tasks described below.

```sh
npm install   # Installs the required project dependencies.
npm start     # or `gulp dev`: Launches the game in development mode.
npm run dist  # or `gulp dist`: Prepares the game for distribution.
npm run clean # or `gulp dist:clean`: Deletes build files.
```

(Optionally, you could install Gulp globally, but you are not required to do
so.)


License
-------

All source code distributed under the terms of the [MIT License](LICENSE).

This project draws upon earlier efforts of these two brilliant developers:

- [slush-phaser-node][sspn], by [Matt Gale (@Eruant)][matt], and
- [slush-phaser-project][sspp], by [Sean Bohan (@pixelpicosean)][ppsn].


<!-- ---------------------------------------------------------------------- -->

[phsr]: http://phaser.io/
[babl]: https://babeljs.io/
[eslt]: http://eslint.org/
[gulp]: http://gulpjs.com/
[brsy]: http://browserify.org/
[ffmp]: https://www.ffmpeg.org/
[edcf]: http://editorconfig.org/
[matt]: https://github.com/Eruant
[bsnc]: http://www.browsersync.io/
[ppsn]: https://github.com/pixelpicosean/
[feat]: https://babeljs.io/docs/learn-es2015/
[ausp]: https://github.com/tonistiigi/audiosprite
[sspn]: https://github.com/Eruant/slush-phaser-node
[sspp]: https://github.com/pixelpicosean/slush-phaser-project
[dwld]: https://github.com/rblopes/phaser-plus-template/archive/master.zip
