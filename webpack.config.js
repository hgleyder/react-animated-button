module.exports = {
  module: {
    rules: [
      // Babel loader, will use your project’s .babelrc
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // Other loaders that are needed for your components
      {
        test: /\.s?css$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
    ],
  },
};
