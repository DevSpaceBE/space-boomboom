import 'pixi'
import 'p2'
import Phaser from 'phaser'
import LevelOne from 'game/states/LevelOne'

class Game extends Phaser.Game {
    constructor () {
        //Empty #game for hot reload. TODO: improve hot-reload
        if (window.document.getElementById('game')) window.document.getElementById('game').innerHTML = ''
        
        super(800, 600, Phaser.CANVAS, 'game')
        this.state.add('LevelOne', LevelOne, false)
        this.state.start('LevelOne')
    }
}

window.game = new Game()

if (module.hot) module.hot.accept()