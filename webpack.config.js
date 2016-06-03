var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    //reload 必须要写
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './entry.js'
  ],
  output: {
    // path: __dirname,
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.js|jsx$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader?presets[]=react&presets[]=es2015'] }
    ]
  },
  plugins: [
    // bundle.js 文件头说明
    new webpack.BannerPlugin('This is created by wiki')
  ]
}