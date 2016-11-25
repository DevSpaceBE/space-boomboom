const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.static('node_modules/phaser/dist'))

app.listen(2110, function () {
  console.log('Example app listening on port 2110!')
})
