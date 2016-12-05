import express from 'express'
import webpack from 'webpack'
import webpackConfig from '../../webpack/webpack.dev.config'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
const app = express()

//Webpack
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use(express.static('public'))

app.listen(2110, function () {
  console.log('Example app listening on port 2110!')
})
