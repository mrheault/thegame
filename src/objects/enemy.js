class Enemy extends Phaser.Sprite {
  constructor(game, x, y, asset, health) {
    super(game, x, y, asset);
    this.game = game;
    this.game.physics.arcade.enable(this);
    //this.body.immovable = true;
    this.body.bounce.y = 0;
    this.body.gravity.y = 300;
    this.body.collideWorldBounds = true;
    //this.anchor.setTo(.5, 1);
    this.health = health;
    this.alive = true;
    //Animations
    //idle
    this.animations.add('idle', Phaser.Animation.generateFrameNames('idle/frame', 1, 2), 10, true);
    this.animations.play('idle');
    this.game.add.existing(this);
    this.game.time.events.loop(Phaser.Timer.SECOND * 3, this.moveEnemy, this);
  }
  
  update() {
    //this.game.debug.bodyInfo(this, 32, 32);
  }
  
  moveEnemy() {
    let baddieMover = this.game.rnd.integerInRange(1, 3);
    if (baddieMover == 1) {
      this.animations.play('idle');
      this.body.velocity.x = 25;
      this.scale.x = -1;
    }
    else if (baddieMover == 2) {
      this.animations.play('idle');
      this.body.velocity.x = -25;
      this.scale.x = 1;
    }
    else {
      this.body.velocity.x = 0;
      this.animations.play('idle');
    }
  }
}

export default Enemy;
