module.exports = {
  entry: './scripts/main.js',
  output: {
    path: __dirname,
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
