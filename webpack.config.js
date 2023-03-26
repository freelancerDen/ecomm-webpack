const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: 'auto'
  },
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "home-page",
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      
    ],
    minimize: true,
  },
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
};
