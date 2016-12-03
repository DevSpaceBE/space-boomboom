import Phaser from 'phaser'
import BaseShip from 'game/ships/BaseShip.js'

export default class extends BaseShip {
    constructor ({ game, x, y, asset }) {
        super(game, x, y, asset, 60, 70)
        this.body.mass = 1
    }

    accelerate() {
        this.body.applyImpulseLocal([0, .3], 0, 35)
    }

    turnLeft() {
        this.body.applyImpulseLocal([.1, 0], -5, -35)
    }

    turnRight() {
        this.body.applyImpulseLocal([-.1, 0], 5, -35)
    }
}
