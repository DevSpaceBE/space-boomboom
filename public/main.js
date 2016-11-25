const game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game', { create: create, render: render })

const UP_DISTANCE = 1





let velocity = 0, keyUp, ship

function create() {
    keyUp = game.input.keyboard.addKey(Phaser.Keyboard.UP)
    keyUp.onHoldCallback = accelerate
    keyDown = game.input.keyboard.addKey(Phaser.Keyboard.DOWN)
    keyDown.onHoldCallback = decelerate

    const shipPoly = new Phaser.Polygon();
    //  And then populate it via setTo, using any combination of values as above
    shipPoly.setTo([new Phaser.Point(20, 0), new Phaser.Point(0, 50), new Phaser.Point(40, 50)]);
    ship = game.add.graphics(375, 550);

    ship.beginFill(0xFF33ff)
    ship.drawPolygon(shipPoly.points)
    ship.endFill()


    setInterval(function () {
      ship.y -= velocity
    }, 10)
}

function render() {
    // game.add.geom(ship, '#0FFFFF')
}

function accelerate() {
    velocity += 1
}

function decelerate() {
    velocity -= 1
    if (velocity < 0)
        velocity = 0
}
