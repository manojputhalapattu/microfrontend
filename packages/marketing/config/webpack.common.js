module.exports = {
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        },
      ],
    },
  };
  


// which means babels is going to preset the react and other imports