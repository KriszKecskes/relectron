const shell2 = require('webpack-synchronizable-shell-plugin');
const exec = require('child_process').exec;


module.exports = {

  devtool: 'eval',

  devServer: {
    port: 9000
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader:'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },

  plugins: [
    {
      apply: (compiler) => {
        compiler.hooks.afterPlugins .tap('AfterEmitPlugin', ( compilation ) => {
          exec('npm run electron-dev', (err, stdout, stderr) => {
            if (stdout) process.stdout.write(stdout);
            if (stderr) process.stderr.write(stderr);
          });
        });
      }
    }
  ]

};