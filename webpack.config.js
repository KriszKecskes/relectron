process.traceDeprecation = true;
const merge = require('webpack-merge');
const commonConfig = require('./build-tools/webpack.common');

module.exports = (env) => {

  const envConfig = require(`./build-tools/webpack.${env.env}`);

  return merge(commonConfig, envConfig);

}