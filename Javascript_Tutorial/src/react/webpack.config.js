var path = require('path');
const src_dir = path.resolve(__dirname, 'src');
const public_dir = path.resolve(__dirname, 'public');

module.exports = {
  entry: src_dir + '/index.js',
  output: {
    path: public_dir + '/build',
    publicPath: '/build',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: public_dir,
    port: 9999
  }
}