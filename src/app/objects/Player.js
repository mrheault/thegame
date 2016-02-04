

class Player extends Phaser.Sprite {

  constructor(game) {
    super(game, 10, game.world.height - 14, 'player');
    this.game = game;
    this.game.physics.arcade.enable(this);
    this.body.bounce.y = 0.2;
    this.body.gravity.y = 300;
    this.body.collideWorldBounds = true;
    this.anchor.setTo(.5, 1);
    //this.pivot.set(50,50);
    
    //idle
    this.animations.add('idle', Phaser.Animation.generateFrameNames('Player/Idle/idle', 1, 12), 10, true);
    
    //run
    this.animations.add('run', Phaser.Animation.generateFrameNames('Player/run/run', 1, 6), 10, true);
    
    //jump
    this.animations.add('jump', Phaser.Animation.generateFrameNames('Player/jumpUp/jump', 1, 1), 10, true);
    
    //jump fall
    this.animations.add('jumpFall', Phaser.Animation.generateFrameNames('Player/jump.fall/jump.fall', 1, 1), 10, true); 
   
    
    //
    //game.debug.spriteInfo(this, 32, 32);
    this.game.cursors = game.input.keyboard.addKeys({ 'up': Phaser.KeyCode.W, 'down': Phaser.KeyCode.S, 'left': Phaser.KeyCode.A, 'right': Phaser.KeyCode.D });
    this.game.add.existing(this);
  }

  update() {
    this.body.velocity.x = 0;

    if (this.game.cursors.left.isDown) {
      //  Move to the left
      this.body.velocity.x = -150;
      this.scale.x = -1;
      this.animations.play('run');
      
    }
    else if (this.game.cursors.right.isDown) {
      //  Move to the right
      this.body.velocity.x = 150;
      this.scale.x = 1;
      this.animations.play('run');
    }
    else {
      //  Stand still
      //this.animations.stop();

      this.animations.play('idle');
    }

    
      //  Allow the player to jump if they are touching the ground.
    if (this.game.cursors.up.isDown && this.body.touching.down) {
      this.body.velocity.y = -350;
      //game.loadTexture('player','Player/jump.up/jump.up', false);
      if (this.deltaY <= 0) {
        this.animations.play('jump');
      }
      else if (this.deltaY > 0 ) {
        this.animations.play('jumpFall');
      }
    }
    
    //this.game.debug.spriteBounds(this.player);
    this.game.debug.bodyInfo(this, 32, 32);
  }

}


export default Player;
