const game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game', { create: create, preload: preload })

let velocity = 0, keyUp, ship

function preload() {
    game.load.image('ship', 'ship.jpg')
}

function create() {
    game.physics.startSystem(Phaser.Physics.P2JS)
    keyUp = game.input.keyboard.addKey(Phaser.Keyboard.UP)
    keyUp.onHoldCallback = accelerate
    keyLeft = game.input.keyboard.addKey(Phaser.Keyboard.LEFT)
    keyLeft.onHoldCallback = turnLeft
    keyLeft = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
    keyLeft.onHoldCallback = turnRight

    ship = game.add.sprite(375, 550, 'ship')
    ship.width = 60
    ship.height = 70
    game.physics.p2.enable(ship)
    console.log(ship.body)
}

function accelerate() {
    ship.body.applyImpulseLocal([0, .3], 0, 35)
}

function turnLeft() {
    ship.body.applyImpulseLocal([.1, 0], -5, -35)
}

function turnRight() {
    ship.body.applyImpulseLocal([-.1, 0], 5, -35)
}
