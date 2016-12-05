const config = require('./webpack.config')
const webpack = require('webpack')

module.exports = (options) => {
    config.output.filename = options.minimize ? 'bundle.min.js' : 'bundle.js'
    options.minimize ? config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ) : null

    if (options.plugins) config.plugins = config.plugins.concat(options.plugins)
    if (options.loaders) config.module.loaders = config.module.loaders.concat(options.loaders)
    if (options.entry) config.entry = options.entry.concat(config.entry)

    return config
}