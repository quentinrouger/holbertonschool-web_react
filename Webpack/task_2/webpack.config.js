const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: './js/dashboard_main.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/i,
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            // type: 'asset/resource',
                        },
                    }
                ]
      },
    ],
  },
};
