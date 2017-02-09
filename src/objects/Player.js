class Player extends Phaser.Sprite {
  constructor(game, x, y, asset, health) {
    super(game, x, y, asset);
    this.game = game;
    this.game.physics.arcade.enable(this);
    this.body.bounce.y = 0;
    this.body.gravity.y = 300;
    this.body.collideWorldBounds = true;
    //this.body.setSize(this.width/2 , this.height);
    this.anchor.setTo(.5, 1);
    this.alive = true;
    this.health = health;
    //this.maxHealth = health;
    this.setupAnimations();

    this.game.cursors = game.input.keyboard.addKeys({
      'up': Phaser.KeyCode.W,
      'down': Phaser.KeyCode.S,
      'left': Phaser.KeyCode.A,
      'right': Phaser.KeyCode.D,
      'attackV': Phaser.KeyCode.F,
      'attackH': Phaser.KeyCode.E
    });
    this.game.add.existing(this);
  }

  update() {
    this.body.velocity.x = 0;
    this.animationKeyBinds();

    //this.game.debug.spriteBounds(this.player);
    //this.game.debug.bodyInfo(this, 32, 32);
    
  }

  jump() {
    //  Allow the player to jump if they are touching the ground.
    if (this.game.cursors.up.isDown && this.body.touching.down) {
      this.body.velocity.y = -350;
    }
    if (this.deltaY < 0) {
      this.animations.play('jump');
    }
    else if (this.deltaY > 0) {
      this.animations.play('jumpFall');
    }
    
  }

  setupAnimations() {
    //Animations
    //idle
    this.animations.add('idle', Phaser.Animation.generateFrameNames('Player/Idle/idle', 1, 12), 10, true);

    //run
    this.animations.add('run', Phaser.Animation.generateFrameNames('Player/run/run', 1, 6), 10, true);

    //jump
    this.animations.add('jump', Phaser.Animation.generateFrameNames('Player/jumpUp/jump', 1, 1), 10, true);

    //jump fall
    this.animations.add('jumpFall', Phaser.Animation.generateFrameNames('Player/jump.fall/jump.fall', 1, 1), 10, true);

    //Attack.Vertical
    this.animations.add('attackV', Phaser.Animation.generateFrameNames('Player/attack.vertical/attack.vertical', 1, 4), 10, true);

    //Attack.Horizontal
    this.animations.add('attackH', Phaser.Animation.generateFrameNames('Player/attack.horizontal/attack.horizontal', 1, 4), 10, true);
  }

  animationKeyBinds() {
    //Movement
    if (this.game.cursors.left.isDown) {
      //  Move to the left
      this.body.velocity.x = -150;
      this.scale.x = -1;
      if (this.game.cursors.up.isDown || (this.body.velocity.y !== 0) ){
        this.jump();
      } else {
        this.animations.play('run');
      }
    }
    else if (this.game.cursors.right.isDown) {
      //  Move to the right
      this.body.velocity.x = 150;
      this.scale.x = 1;
      if (this.game.cursors.up.isDown || this.body.velocity.y !== 0) {
        this.jump();
      } else {
        this.animations.play('run');
      }
    }
    else if (this.game.cursors.up.isDown) {
      this.jump();
    }
    //Attacks
    else if (this.game.cursors.attackV.isDown) {
      this.animations.play('attackV');
    }
    else if (this.game.cursors.attackH.isDown) {
      this.animations.play('attackH');
    }
    else if (this.deltaY === 0 && this.body.velocity.x === 0 && this.body.velocity.y === 0) {
      //  Stand still
      this.animations.play('idle');
    }
  }
}

export default Player;
