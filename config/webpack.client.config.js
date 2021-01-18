const path = require('path')
const merge = require('webpack-merge')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const base = require('./webpack.base.config')

module.exports = merge(
  base, {
    entry: {
      client: path.resolve(__dirname, '../src/entry-client.js')
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: path.resolve(__dirname, '../src/index.html'),
        filename: 'index.html'
      })
    ]
  }
)