import BaseShip from 'game/ships/BaseShip.js'

class SpaceX extends BaseShip {
  constructor({ game, x, y, asset }) {
    super(game, x, y, asset, 60, 70)
    this.body.mass = 1
    this.accelerateParams = [[0, .3], 0, this.impulseY]
  }
}

export default SpaceX
