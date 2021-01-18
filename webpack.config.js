const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  module: 'development',
  entry: './app.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      }
    ],
    plugins: [
      new VueLoaderPlugin(),
      new HTMLWebpackPlugin({
        template: './index.html'
      })
    ]
  }
}
