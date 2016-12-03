import Phaser from 'phaser'

export default class extends Phaser.Sprite {
    constructor (game, x, y, asset, width, height) {
        super(game, x, y, asset)
        this.game = game
        this.width = width
        this.height = height
        this.game.physics.p2.enable(this)
        this.impulseY = this.width / 2 + this.width / 12
        this.accelerateParams = [[0, .1], 0, this.impulseY]
        this.turnLeftParams = [[.1, 0], -5, -this.impulseY]
        this.turnRightParams = [[-.1, 0], 5, -this.impulseY]
    }

    accelerate() {
        this.body.applyImpulseLocal(...this.accelerateParams)
    }

    turnLeft() {
        this.body.applyImpulseLocal(...this.turnLeftParams)
    }

    turnRight() {
        this.body.applyImpulseLocal(...this.turnRightParams)
    }
}
