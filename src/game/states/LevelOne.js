import Phaser from 'phaser'
import SpaceX from 'game/ships/SpaceX.js'
import starfield from 'game/assets/starfield.jpg'

class LevelOne extends Phaser.State {
  init() {}

  preload() {
    this.game.load.image('starfield', starfield)
  }

  create() {
    this.game.world.setBounds(0, 0, 1920, 1200)

    this.game.physics.startSystem(Phaser.Physics.P2JS)

    this.starfield = this.game.add.tileSprite(0, 0, 800, 600, 'starfield')
    this.starfield.fixedToCamera = true

    this.cursors = this.game.input.keyboard.createCursorKeys()
    this.ship = this.game.add.existing(new SpaceX({ game: this.game, x: 375, y: 550, asset: 'spacex' }))
    this.game.camera.follow(this.ship)
  }

  update() {
    const { game, cursors, ship, starfield } = this
    if (cursors.left.isDown) ship.turnLeft()
    if (cursors.right.isDown) ship.turnRight()
    if (cursors.up.isDown) ship.accelerate()

    if (!game.camera.atLimit.x)
      starfield.tilePosition.x -= (ship.body.velocity.x * game.time.physicsElapsed)
    if (!game.camera.atLimit.y)
      starfield.tilePosition.y -= (ship.body.velocity.y * game.time.physicsElapsed)
  }

  render() {
    this.game.debug.text(`FPS: ${this.game.time.fps}`, 2, 14, "#00ff00")
  }
}

export default LevelOne
