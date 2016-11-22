DEPRECATION NOTICE - 2016-11-22
===============================

Hi there! Thanks for your interest. Unfortunately, I am not updating this
template anymore. This is not the end, though.

Instead, development has moved to the [`generator-phaser-plus`][gpp_]
repository. `generator-phaser-plus` is a Yeoman generator for creating projects
for Web games using the fabulous [Phaser game framework][phsr].

If you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/),
installing `generator-phaser-plus` is easy.

```
npm install --global yo                         # To install the Yeoman CLI
npm install --global generator-phaser-plus      # To install the generator
yo phaser-plus                                  # Run `generator-phaser-plus`
```

Find out more about `generator-phaser-plus` at its [project page][gpp_].

-------------------------------------------------------------------------------


![Phaser Plus Template](logo.png)
=================================

>   A complete project template for developing [Phaser][phsr] web games
>   including Browserify, BrowserSync and more.

[![Dependency Status][bdg1] ![devDependency Status][bdg2]][deps]


Batteries Included
------------------

*   [Gulp][gulp] task manager, to handle development and distribution tasks,
    with alternative npm scripts provided.

*   [BrowserSync][bsnc] for cross-device testing.

*   [Browserify][brsy] for easier management of components and dependencies.

*   [Babel][babl] to compile ECMAScript 2015 scripts (or future specs) into
    scripts compatible with today's browsers. Check which [language
    features][feat] are currently supported.

*   [ESLint][eslt] for code quality check.

*   [EditorConfig][edcf] support, for consistent editor configuration between
    collaborators — check if [EditorConfig support][ecpl] is available for your
    code editor.


Development Instructions
------------------------

Download and extract the [packaged project][dwld] contents, or clone this
repository locally. Either way, the following npm scripts are available to you,
performing the tasks described below.

```sh
npm install   # Installs the required project dependencies.
npm start     # or `gulp dev`: Launches the game in development mode.
npm run dist  # or `gulp dist`: Prepares the game for distribution.
npm run clean # or `gulp clean`: Deletes build files.
```

(Optionally, you could install Gulp globally, but you are not required to do
so.)


[`generator-phaser-plus`][gpp_]
-------------------------------

![generator-phaser-plus Screenshot](screenshot.png)

Like `phaser-plus-template`? Looking for a way of bootstrapping your game
projects instantly? Look no further and try [`generator-phaser-plus`][gpp_].


License
-------

All source code distributed under the terms of the [MIT License](LICENSE).


<!-- Links -->

[phsr]: http://phaser.io/
[eslt]: http://eslint.org/
[gulp]: http://gulpjs.com/
[babl]: https://babeljs.io/
[brsy]: http://browserify.org/
[edcf]: http://editorconfig.org/
[bsnc]: http://www.browsersync.io/
[feat]: https://babeljs.io/docs/learn-es2015/
[gpp_]: https://github.com/rblopes/generator-phaser-plus
[deps]: https://david-dm.org/rblopes/phaser-plus-template
[dwld]: https://github.com/rblopes/phaser-plus-template/archive/master.zip
[bdg1]: https://david-dm.org/rblopes/phaser-plus-template.svg?style=flat-square
[bdg2]: https://david-dm.org/rblopes/phaser-plus-template/dev-status.svg?style=flat-square
