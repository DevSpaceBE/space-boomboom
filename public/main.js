const game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game', { create: create, render: render, preload: preload })

let velocity = 0, keyUp, ship

function preload() {
    game.load.image('ship', 'ship.jpg')
}

function create() {
    game.physics.startSystem(Phaser.Physics.P2JS)
    keyUp = game.input.keyboard.addKey(Phaser.Keyboard.UP)
    keyUp.onHoldCallback = accelerate
    keyDown = game.input.keyboard.addKey(Phaser.Keyboard.DOWN)
    keyDown.onHoldCallback = decelerate

    ship = game.add.sprite(375, 550, 'ship')
    ship.width = 60
    ship.height = 70
    game.physics.p2.enable(ship)
    console.log(ship.body)
}

function render() {
    // game.add.geom(ship, '#0FFFFF')
}

function accelerate() {
    ship.body.moveUp(40)
}

function decelerate() {
    velocity -= 1
    if (velocity < 0)
        velocity = 0
}
