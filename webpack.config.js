const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.css'], // Add the extensions Webpack should resolve
  },
  mode: 'production',
  module: [
    {
      rules: [
        {
          test: /.js$/,
          use: 'babel-loader',
        },
      ],
    },
  ],
};
