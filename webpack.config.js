const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  // Files to watch for
  entry: './app/index.js',

  // Bundle/build output directory
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title : 'Electroweb Demo',
      template : './app/public/index.html'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'app/public/media/images',
          to: 'media/images'
        }
      ]
    })
  ],

  // Set node modules to use for various file types
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },

  // Development server set-up - define static assets directory and paths
  devServer: {
    open: true,
    hot: false, // disable hot reload for plain HTML/CSS/JS development
    compress: true,
    static: {
      directory: path.join(__dirname, 'app', 'public'),
      publicPath: '/'
    }
  }
}
