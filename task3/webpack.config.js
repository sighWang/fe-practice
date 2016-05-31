module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' }
    ]
  }
};