

class Player extends Phaser.Sprite {

  constructor(game) {
    super(game, 30, game.world.height - 260, 'player');

    game.physics.arcade.enable(this);
    this.body.bounce.y = 0.2;
    this.body.gravity.y = 300;
    this.body.collideWorldBounds = true;
    this.anchor.setTo(.5, 1);
    
    //idle
    this.animations.add('idle', Phaser.Animation.generateFrameNames('Player/Idle/idle', 1, 12), 10, true);
    
    //run
    this.animations.add('run', Phaser.Animation.generateFrameNames('Player/run/run', 1, 6), 10, true);
    
    //jump
    //this.animations.add('jump', Phaser.Animation.generateFrameNames('Player/jump.up/jump.up', 1, 1), 10, true);

    game.add.existing(this);
  }

}


export default Player;
