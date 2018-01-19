const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

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
    // port: 3333, //custom dev server port
    contentBase: './build',
    hot: true,    
    historyApiFallback: true,
    /*
    These proxy examples assume you have another app running on 
    localhost. Any request from this app that go to test1_api or
    test2_api etc will be automatically routed to port 3334 in 
    this example.
    When running from production, the server for your index.html with bundle.js would handle
    these api calls, likely from app.js with a 
    "app.use('/test1_api/*', apiConnection.access_api)"
    before your "app.get('/*', function(req, res){..." and apiConnection.access_api would be 
    your "exports.access_api = (req, res, next) => {..." middleware handling the route;
    */
    // proxy example 1
    // proxy: {
    //   '/test1_api/*': {
    //     target: 'http://localhost:3334',
    //     secure: false
    //   }
    // }
    // proxy example 2
    // proxy: [
    //   {
    //     context: ['/test1_api/**', '/test2_api/**', '/test3_api/**'],
    //     target: 'http://localhost:3334',
    //     secure: false
    //   }
    // ]
  },
  module: {
    rules: [
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
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      title: 'Home'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
  ],
};