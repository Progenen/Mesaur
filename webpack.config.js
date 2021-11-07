'use strict';

let path = require('path');
let webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/JS/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/JS'
  },
  watch: true,
  
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
};
