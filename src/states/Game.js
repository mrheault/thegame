/*
 * Game state
 * ==========
 *
 */

import Player from '../objects/Player';
import Enemy from '../objects/Enemy';

export default class Game extends Phaser.State {

  create() {
    this.game.world.setBounds(0, 0, 1920, this.world.height);
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
    this.ground.scale.setTo(10, 2);

    //  This stops it from falling away when you jump on it
    this.ground.body.immovable = true;

    //  Now let's create two ledges
    this.ledge = this.platforms.create(450, 400, 'ground');
    this.ledge.body.immovable = true;

    this.ledge = this.platforms.create(-140, 250, 'ground');
    this.ledge.body.immovable = true;
  
    this.ledge = this.platforms.create(950, 200, 'ground');
    this.ledge.body.immovable = true;
    
    this.player = new Player(this.game, 30, this.world.height - 14, 'player', 100);
    this.enemy = new Enemy(this.game, this.world.randomX, this.world.randomY, 'enemy1', 30);
    this.enemy2 = new Enemy(this.game, this.world.randomX, this.world.randomY, 'enemy2', 50);
    this.enemy3 = new Enemy(this.game, this.world.randomX, this.world.randomY, 'enemy2', 50);
    
    this.enemyGroup = [this.enemy, this.enemy2, this.enemy3];
    this.game.camera.follow(this.player);
    
  }

  update() {
    this.physics.arcade.collide(this.player, this.platforms);
    this.physics.arcade.collide(this.enemyGroup, this.platforms);
    this.physics.arcade.collide(this.enemyGroup, this.player);
  }
  
  render() {
    //this.game.debug.cameraInfo(this.game.camera, 32, 32);
    //this.game.debug.spriteCoords(this.player, 32, 500);
    this.game.debug.body(this.player, 'red', false);
    this.game.debug.spriteBounds(this.player, 'green', false);
    this.game.debug.body(this.enemy, 'red', false);
    this.game.debug.spriteBounds(this.enemy, 'green', false);
    
  }
  
}
