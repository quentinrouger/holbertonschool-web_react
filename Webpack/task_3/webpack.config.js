const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: { header: './modules/header/header.js',
   body: './modules/body/body.js', 
   footer: './modules/footer/footer.js',
},
  output: {
    filename: '[name].bundle.js',
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
                  "file-loader",
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                        },
                    }
                ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'task_3'
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'public'), // Serve files from the public directory
    port: 8564, // Set the port to 8564
    open: true, // Open the browser automatically
  },
};
