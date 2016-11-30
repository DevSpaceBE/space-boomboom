const game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update })

let velocity = 0, keyUp, ship, cursors

function preload() {
    game.load.image('ship', 'ship.jpg')
}

function create() {
    game.physics.startSystem(Phaser.Physics.P2JS)
    cursors = game.input.keyboard.createCursorKeys()

    ship = game.add.sprite(375, 550, 'ship')
    ship.width = 60
    ship.height = 70
    game.physics.p2.enable(ship)
    ship.body.mass = 1
}

function update() {
  if (cursors.left.isDown) turnLeft()
  if (cursors.right.isDown) turnRight()
  if (cursors.up.isDown) accelerate()
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
