import 'pixi'
import 'p2'
import Phaser from 'phaser'
import LevelOne from 'game/states/LevelOne'

class Game extends Phaser.Game {
    constructor () {
        if (window.document.getElementById('game')) window.document.getElementById('game').innerHTML = ''   //Empty #game for hot reload. TODO: improve hot-reload
        super(800, 600, Phaser.CANVAS, 'game', null)
        this.state.add('LevelOne', LevelOne, false)
        this.state.start('LevelOne')
    }
}

window.game = new Game()

if (module.hot) module.hot.accept()