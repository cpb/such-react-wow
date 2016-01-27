var path = require('path');
var config = {
  entry: path.resolve(__dirname, 'lib/main.js'),
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'index.js',
    libraryTarget: 'var',
    library: 'Doge'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }]
  }
};

module.exports = config;
