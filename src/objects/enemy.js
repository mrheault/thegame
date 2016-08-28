class Enemy extends Phaser.Sprite {
  constructor(game, x, y, asset, health) {
    super(game, x, y, asset);
    this.game = game;
    this.game.physics.arcade.enable(this);
    this.body.bounce.y = 0;
    this.body.gravity.y = 300;
    this.body.collideWorldBounds = true;
    this.anchor.setTo(.5, 1);
    this.health = health;
    //Animations
    //idle
    this.animations.add('idle', Phaser.Animation.generateFrameNames('idle/frame', 1, 2), 10, true);
    this.game.add.existing(this);
    //this.moveEnemy();
  }

  update() {
    this.body.velocity.x = 0;
    this.animations.play('idle');

    //this.game.debug.bodyInfo(this, 32, 32);
  }

  moveEnemy() {
    //TODO: Need to have better random movement logic
    this.game.time.events.loop(4000, function () {
      this.game.add.tween(this)
          .to({x: this.game.world.randomX, y: this.game.world.height - 14}, 2000, Phaser.Easing.Quadratic.InOut, true);
    }, this);
  }
}

export default Enemy;
