const path               = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  mode: "development",
  entry: {
    'bundle.js': './src/index.js',
    'styles.js': './src/styles.scss'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    // TODO: this only updates whenever you restart the server.
    new HtmlWebpackPlugin({
      title: "Output BLAH",
      template: "index.html"
    })
  ],
  output: {
    filename: './dist/[name]',
    publicPath: '/'
  }
};