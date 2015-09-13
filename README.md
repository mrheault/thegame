Phaser Plus Template
====================

>   A project template for [Phaser][phsr] web games.


What's included?
----------------

*   [Gulp][gulp] task manager, to handle development and distribution tasks.

*   **New in v0.6** npm script for [Audio Sprite][ausp] generation.

*   [Browserify][brsy] support for easier management of components and
    dependency tracking.

*   [BrowserSync][bsnc] development server, for cross-device testing.

*   [EditorConfig][edcf] support, for consistent editor configuration between
    collaborators — check if EditorConfig support is available for your code
    editor.

*   [ESLint][eslt] for code quality check.

*   [Babel][babl] to compile ECMAScript 2015 style code to compatible, ES 5.1
    syntax. Check which [language features][feat] are currently supported.

*   [Handlebars][hbs.] templates, source maps and more!


Development Instructions
------------------------

Download and extract the [packaged project][dwld] contents, or clone this
repository locally. Either way, the following npm scripts are available to you,
performing the tasks described below.

```sh
npm install   # Installs all required project dependencies.
npm start     # Launch a development server. Same as `gulp dev`.
npm run dist  # Prepare the game release for distribution. Also `gulp dist`.
npm run clean # Delete temporary and distribution build files.
```

(Optionally, you could install Gulp globally, but you are not required to do
so.)

Happy coding!


[`slush-phaser-plus`][ssp+]
---------------------------

Wanna try something different? `slush-phaser-plus` is an automated project
generator based on this template. Check [the project page][ssp+] for more
details, or just install it with npm (`npm install --global slush-phaser-plus`)
and give it a shot!

<em>(Meanwhile, development of this template will continue regularly.)</em>


License
-------

All source code distributed under the terms of the [MIT License](LICENSE).

This project is based upon earlier efforts by these two brilliant developers:

- [slush-phaser-node][sspn], by [Matt Gale (@Eruant)][matt], and
- [slush-phaser-project][sspp], by [Sean Bohan (@pixelpicosean)][ppsn].


<!-- ---------------------------------------------------------------------- -->

[phsr]: http://phaser.io/
[babl]: https://babeljs.io/
[eslt]: http://eslint.org/
[gulp]: http://gulpjs.com/
[brsy]: http://browserify.org/
[edcf]: http://editorconfig.org/
[hbs.]: http://handlebarsjs.com/
[matt]: https://github.com/Eruant
[bsnc]: http://www.browsersync.io/
[ppsn]: https://github.com/pixelpicosean/
[feat]: https://babeljs.io/docs/learn-es2015/
[ausp]: https://github.com/tonistiigi/audiosprite
[sspn]: https://github.com/Eruant/slush-phaser-node
[ssp+]: https://github.com/rblopes/slush-phaser-plus
[sspp]: https://github.com/pixelpicosean/slush-phaser-project
[dwld]: https://github.com/rblopes/phaser-plus-template/archive/master.zip
