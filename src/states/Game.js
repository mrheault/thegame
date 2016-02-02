/*
 * Game state
 * ==========
 *
 * A sample Game state, displaying the Phaser logo.
 */
import Player from '../objects/Player';

export default class Game extends Phaser.State {

  create() {
    this.add.sprite(0, 0, 'sky');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    this.platforms = this.add.group();

    //  We will enable physics for any object that is created in this group
    this.platforms.enableBody = true;

    // Here we create the ground.
    this.ground = this.platforms.create(0, this.world.height - 14, 'ground');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    this.ground.scale.setTo(2, 2);

    //  This stops it from falling away when you jump on it
    this.ground.body.immovable = true;

    //  Now let's create two ledges
    this.ledge = this.platforms.create(400, 400, 'ground');
    this.ledge.body.immovable = true;

    this.ledge = this.platforms.create(50, 250, 'ground');
    this.ledge.body.immovable = true;

    this.ledge = this.platforms.create(400, 50, 'ground');
    this.ledge.body.immovable = true;

    this.player = new Player(this.game);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.physics.arcade.collide(this.player, this.platforms);

    this.player.body.velocity.x = 0;

    if (this.cursors.left.isDown) {
      //  Move to the left
      this.player.body.velocity.x = -150;
      this.player.scale.x =  -1;
      this.player.animations.play('run');
    }
    else if (this.cursors.right.isDown) {
      //  Move to the right
      this.player.body.velocity.x = 150;
      this.player.scale.x =  1;
      this.player.animations.play('run');
    }
    else {
      //  Stand still
      //this.player.animations.stop();

      this.player.animations.play('idle');
    }

    //  Allow the player to jump if they are touching the ground.
    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.body.velocity.y = -350;
      
    }
  }

}
