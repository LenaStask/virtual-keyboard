const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './js/index.js',
  mode: 'production',
  output: {
    filename: 'dist/bundle.js',
    path: __dirname,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'index.html', to: 'dist/' },
        { from: 'style.css', to: 'dist/' },
      ],
    }),
  ],
};
