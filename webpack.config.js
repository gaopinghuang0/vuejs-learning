const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// useful for more than one entry
const extractCommons = new webpack.optimize.CommonsChunkPlugin({
  name: 'commons',
  filename: 'commons.js'
})

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './app.js',
        eg1: './eg1.entry.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/', // IMPORTANT: Must be here for webpack-dev-server
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['es2015', { modules: false }]
                    ]
                }
            }]
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.(png|jpg)$/,
            use: [{
                loader: 'url-loader',
                options: { limit: 10000 } // Convert images < 10k to base64 strings
            }]
        }, {
            test: /\.html$/,
            loader: "raw-loader"
        }, ]
    },
    plugins: [
		    extractCommons,
        new webpack.NamedModulesPlugin(),
        // new HtmlWebpackPlugin({
        //     template: './index.html'
        // }),
    ]
}

module.exports = config
