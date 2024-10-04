const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const EslintWebpackPlugin = require("eslint-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js", // 入口文件1
  },
  output: {
    path: path.resolve(__dirname, "dist"), // 开发环境下不输出文件，由webpack-dev-server输出
    filename: "js/[name].bundle.js", // js文件输出路径
  },
  devtool: "inline-source-map", // 开启source-map 仅在开发环境下生效，生产环境下需要注释掉
  devServer: {
    port: "8080", // 端口号
    open: true, // 自动打开浏览器
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
      {
        test: /\.css/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env"],
              },
            },
          },
        ],
      },
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
