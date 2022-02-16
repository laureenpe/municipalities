/* eslint-disable */
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: "src/assets/images", to: "assets/images/[path][name].[ext]" },
        ],
      }),
    ],
  },
  publicPath: process.env.NODE_ENV === "production" ? "/municipalities/" : "/",
};
