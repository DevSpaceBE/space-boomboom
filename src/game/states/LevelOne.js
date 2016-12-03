import Phaser from 'phaser'
import SpaceX from 'game/ships/SpaceX.js'
import spaceXSprite from 'game/assets/spacex.jpg'

export default class extends Phaser.State {
    init() {}

    preload() {
        this.game.load.image('spacex', spaceXSprite)
    }

    create() {
        this.game.physics.startSystem(Phaser.Physics.P2JS)
        this.cursors = game.input.keyboard.createCursorKeys()
        this.ship = new SpaceX({ game: this.game, x: 375, y: 550, asset: 'spacex' })
        this.game.add.existing(this.ship)
    }

    update() {
        if (this.cursors.left.isDown) this.ship.turnLeft()
        if (this.cursors.right.isDown) this.ship.turnRight()
        if (this.cursors.up.isDown) this.ship.accelerate()
    }
}