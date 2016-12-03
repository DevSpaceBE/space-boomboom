const path = require('path')
const webpack = require('webpack')

const phaserModule = path.join(__dirname, '../node_modules/phaser/')
const phaser = path.join(phaserModule, 'build/custom/phaser-split.js')
const pixi = path.join(phaserModule, 'build/custom/pixi.js')
const p2 = path.join(__dirname, '../node_modules/p2/src/p2.js')

module.exports = {
    context: path.join(__dirname, '..'),
    entry: {
        app: [
            'babel-polyfill',
            path.join(__dirname, '..', 'src', 'game', 'main.js'),
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000'
        ],
        vendor: ['pixi', 'p2', 'phaser']
    },
    devtool: 'cheap-source-map',
    output: {
        path: path.join(__dirname, '..', 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.jsx'],
        alias: {
            request: 'browser-request'
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
    ],
    module: {
        loaders: [
            { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url-loader?limit=10000' },
            { test: /\.json$/, loader: 'json-loader' },
            { 
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/, 
                include: path.join(__dirname, '..', 'src', 'game')
            },
            { test: /pixi\.js/, loader: 'expose?PIXI' },
            { test: /phaser-split\.js$/, loader: 'expose?Phaser' },
            { test: /p2\.js/, loader: 'expose?p2' }
        ]
    },
    node: {
        __dirname: true
    },
    resolve: {
        alias: {
            game: path.join(__dirname, '..', 'src', 'game'),
            server: path.join(__dirname, '..', 'src', 'server'),
            phaser: phaser,
            pixi: pixi,
            p2: p2
        }
    }
}