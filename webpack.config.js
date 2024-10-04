const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { stat } = require("fs");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js", // 入口文件1
    print: "./src/print.js", // 入口文件2
  },
  devtool: "inline-source-map", // 开启source-map 仅在开发环境下生效，生产环境下需要注释掉
  devServer: {
    static: "./dist",
  },
  plugins: [new HtmlWebpackPlugin({ title: "开发环境" })], // 自动生成html文件
  output: {
    filename: "[name].bundle.js", // 根据入口文件名生成打包后的文件名
    path: path.resolve(__dirname, "dist"),
    clean: true, // 每次打包前清空dist目录
  },
  optimization: {
    runtimeChunk: "single",
  },
};
