const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      title: "home-page",
      template: "src/index.html",
      minify: true
    }),
  new MiniCssExtractPlugin()
],
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new CssMinimizerPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            // Lossless optimization with custom option
            // Feel free to experiment with options for better result for you
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              // Svgo configuration here https://github.com/svg/svgo#configuration
              [
                "svgo",
                {
                  plugins: [
                    {
                      name: "preset-default",
                      params: {
                        overrides: {
                          removeViewBox: false,
                          addAttributesToSVGElement: {
                            params: {
                              attributes: [
                                { xmlns: "http://www.w3.org/2000/svg" },
                              ],
                            },
                          },
                        },
                      },
                    },
                  ],
                },
              ],
            ],
          },
        },
      }),
    ],
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /.(png|gif|jpg|jpeg|ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext][query]",
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
});
