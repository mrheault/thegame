/*
 * `assets` module
 * ===============
 *
 * Declares static asset packs to be loaded using the `Phaser.Loader#pack`
 * method. Use this module to declare game assets.
 */

export default {
  // -- Splash screen assets used by the Preloader.
  boot: [{
    key: 'splash-screen',
    type: 'image'
  }, {
    key: 'progress-bar',
    type: 'image'
  }],

  // - Game assets ------------------------------------------------------------
  game: [
    {
      key: 'phaser',
      type: 'image'
    },
    {
      key: 'sky',
      type: 'image'
    },
    {
      key: 'dude',
      type: 'spritesheet'
    },
    {
      key: 'ground',
      type: 'image',
      url: 'platform.png'
    },
    {
      //   Loads a JSON Array format Texture Atlas.
      type: 'atlasJSONArray',
      key: 'player',
      textureURL: 'atlas-maps/player-boy.png',
      atlasURL: 'atlas-maps/player-boy.json',
      atlasData: null
    }

    // Example: adding a background music.
    // {
    //   key: 'tune',
    //   type: 'audio',
    //   urls: [ 'tune.oga', 'tune.m4a' ]
    // }

    // Example: adding a audio sprite containing sound effects.
    // {
    //   key: 'sfx',
    //   type: 'audiosprite',
    //   urls: [ 'sfx.m4a' ],
    //   jsonURL: 'sfx.json'
    // }
  ]

};
