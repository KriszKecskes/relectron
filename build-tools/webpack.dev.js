const shell = require('webpack-shell-plugin');

module.exports = {

  devtool: 'eval-source-map',

  plugins: [
    new shell({ onBuildStart:['rimraf build'] ,onBuildEnd:['npm run electron-dev']})
  ]

};