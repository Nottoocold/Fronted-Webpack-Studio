const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const EslintWebpackPlugin = require("eslint-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js", // 入口文件1
  },
  output: {
    path: path.resolve(__dirname, "dist"), // 项目打包输出的根目录
    filename: "js/[name].bundle.js", // js文件输出路径
    clean: true, // 每次打包前清空dist目录
  },
  plugins: [
    new HtmlWebpackPlugin(), // 自动生成html文件
    new EslintWebpackPlugin({ configType: "flat" }), // 开启eslint检查, 版本9.0.0以上需要指定configType:flat
  ],
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      { test: /\.css/i, use: ["style-loader", "css-loader"] },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: "asset", // 处理图片资源, 对于小于4kb的图片会内联到js文件中，大于4kb的图片会单独打包成文件
        generator: { filename: "img/[hash:10][ext][query]" },
        parser: { dataUrlCondition: { maxSize: 4 * 1024 } },
      },
      {
        test: /\.(ttf|woff2?|mp3|mp4|avi)$/i,
        type: "asset/resource", // 处理其他资源 如字体文件
        generator: { filename: "img/[hash:10][ext][query]" },
      },
    ],
  },
};
