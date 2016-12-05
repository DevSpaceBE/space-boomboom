import Phaser from 'phaser'
import spaceXSprite from 'game/assets/spacex.jpg'

export default class extends Phaser.State {
  init() {
    this.game.time.advancedTiming = true
  }

  preload() {
    this.game.load.image('spacex', spaceXSprite)
  }

  create() {}

  render () {
    this.state.start('LevelOne')
  }
}
