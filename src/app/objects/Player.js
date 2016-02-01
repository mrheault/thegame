

class Player extends Phaser.Sprite {

  constructor(game) {
    super(game, 30, game.world.height - 260, 'player-boy-run', 'Player/run/run1.png');

    game.physics.arcade.enable(this);
    this.body.bounce.y = 0.2;
    this.body.gravity.y = 300;
    this.body.collideWorldBounds = true;

    
    //  Our two animations, walking left and right.
    this.animations.add('left', Phaser.Animation.generateFrameNames('Player/run/run', 1, 6), 5, true);
    this.animations.add('right', Phaser.Animation.generateFrameNames('Player/run/run', 7, 12), 5, true);

    game.add.existing(this);
  }

}


export default Player;
