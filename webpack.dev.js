const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common,
  {
    mode: "development",
    devServer: {
      static: "./dist",
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "home-page",
        template: "src/index.html",
      }),
      new MiniCssExtractPlugin() 
    ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader" ]
        },
        {
          test: /.(png|gif|jpg|jpeg|ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext][query]'
          }
        },
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
      ],
    },
  } 
  
  )


