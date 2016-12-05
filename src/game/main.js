import 'pixi'
import 'p2'
import Phaser from 'phaser'
import Boot from 'game/states/Boot'
import LevelOne from 'game/states/LevelOne'

class Game extends Phaser.Game {
  constructor () {
    // Empty #game for hot reload. TODO: improve hot-reload
    if (window.document.getElementById('game'))
      window.document.getElementById('game').innerHTML = ''

    super(800, 600, Phaser.CANVAS, 'game')
    this.state.add('LevelOne', LevelOne, false)
    this.state.add('Boot', Boot, false)
    this.state.start('Boot')
  }
}

const game = new Game() // eslint-disable-line no-unused-vars

if (module.hot) module.hot.accept()
