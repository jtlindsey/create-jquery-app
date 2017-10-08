const path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

// http://www.jumoel.com/2017/zero-to-webpack.html
const MinifierPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  entry: {
    app: './src/app.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    // port: 8088,
    contentBase: './build',
    hot: true,    
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: 'babel-loader', options: { cacheDirectory: true } }],
        exclude: /node_modules(?!\/webpack-dev-server)/,
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader" },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {loader: 'html-loader'}
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(pathsToClean, cleanOptions),
    // new HtmlWebpackPlugin({
    //   title: 'Hot Module Replacement'
    // }),
    // uglify
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
  ],
};