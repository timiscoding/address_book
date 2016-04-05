module.exports = {
  entry: [
    "./src/index.js"
  ],
  output: {
    path: __dirname,
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:
          {
            presets: ['react', 'es2015']
          }
      }
    ]
  }
};
