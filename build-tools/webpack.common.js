const paths = require('./paths');
const html = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {

  performance: {
    hints: false
  },

  entry: './src/App.js',

  output: {
    filename: 'bundle.js',
    path: paths.build
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/images',
          },
        }
      }
    ]
  },

  plugins: [
    new html({
      template: './src/App.html'
    }),
    new webpack.ProgressPlugin()
  ],

  resolve: {
    extensions: ['.js', '.jsx']
  }

}