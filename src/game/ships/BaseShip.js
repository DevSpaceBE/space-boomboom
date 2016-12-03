import Phaser from 'phaser'

export default class extends Phaser.Sprite {
    constructor (game, x, y, asset, width, height) {
        super(game, x, y, asset)
        this.game = game
        this.width = width
        this.height = height
        this.game.physics.p2.enable(this)
    }
}
