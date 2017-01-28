/*
 * Game state
 * ==========
 *
 */

import Player from '../objects/Player';
import Enemy from '../objects/Enemy';

export default class Game extends Phaser.State {

  create() {
    //this.world.setBounds(0, 0, 1000, 600);
    this.physics.arcade.setBoundsToWorld();
    //this.camera.setBoundsToWorld();
    //this.camera.y = -this.height/2;
    this.add.sprite(0, 0, 'background');
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

    this.ledge = this.platforms.create(-140, 250, 'ground');
    this.ledge.body.immovable = true;

    this.player = new Player(this.game, 30, this.world.height - 14, 'player');
    this.enemy = new Enemy(this.game, this.world.randomX, this.world.height - 14, 'enemy1');
    this.enemy2 = new Enemy(this.game, this.world.randomX, this.world.height - 14, 'enemy2');

  }

  update() {
    this.physics.arcade.collide(this.player, this.platforms);
    this.physics.arcade.collide(this.enemy, this.platforms);
    this.physics.arcade.collide(this.enemy2, this.platforms);
    this.physics.arcade.collide(this.enemy2, this.player);

  }

}
