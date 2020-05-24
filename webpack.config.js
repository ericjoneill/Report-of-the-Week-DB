const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    module: {
      rules: [
              {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: [
        'babel-loader'
      ]
    },
        {
          test: /\.html$/,
            use: [
                    {
                loader: 'html-loader',
                options: {minimize: true}
                }
            ]
        },
            {
              test: /\.(png|jpe?g|gif)$/,
              use: [
                  'file-loader'
              ],
            },

            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
      ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",

        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
          })

    ],
    devServer: {
      port: process.env.PORT || 1337
    }
  };

