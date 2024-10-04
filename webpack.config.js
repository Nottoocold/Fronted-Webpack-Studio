const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js", // 入口文件1
  },
  output: {
    path: path.resolve(__dirname, "dist"), // 项目打包输出的根目录
    filename: "js/[name].bundle.js", // js文件输出路径
    clean: true, // 每次打包前清空dist目录
  },
  devtool: "inline-source-map", // 开启source-map 仅在开发环境下生效，生产环境下需要注释掉
  devServer: {
    static: "./dist",
  },
  plugins: [new HtmlWebpackPlugin({ title: "开发环境" })], // 自动生成html文件
  module: {
    rules: [
      { test: /\.css/i, use: ["style-loader", "css-loader"] },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: "asset",
        generator: { filename: "img/[hash][ext][query]" },
        parser: { dataUrlCondition: { maxSize: 4 * 1024 } },
      },
    ],
  },
  optimization: {
    runtimeChunk: "single",
  },
};
