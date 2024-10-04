const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js", // 入口文件1
    print: "./src/print.js", // 入口文件2
  },
  plugins: [new HtmlWebpackPlugin({title: '管理输出'}),], // 自动生成html文件
  output: {
    filename: "[name].bundle.js", // 根据入口文件名生成打包后的文件名
    path: path.resolve(__dirname, "dist"),
    clean: true, // 每次打包前清空dist目录
  },
};
