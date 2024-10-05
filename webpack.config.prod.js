const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const EslintWebpackPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname), // 项目根目录
  mode: "production",
  entry: {
    app: "./src/index.js", // 入口文件
  },
  output: {
    path: path.resolve(__dirname, "dist"), // 项目打包输出的根目录
    filename: "js/[id].bundle.js", // js文件输出路径
    clean: true, // 每次打包前清空dist目录
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // 别名配置
    },
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin(), // 自动生成html文件
    new EslintWebpackPlugin({ configType: "flat" }), // 开启eslint检查, 版本9.0.0以上需要指定configType:flat
    new MiniCssExtractPlugin(), // 分离css文件
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
          MiniCssExtractPlugin.loader,
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
  optimization: {
    chunkIds: 'deterministic',
    runtimeChunk: true,
    minimizer: [new CssMinimizerPlugin(), "..."],
  },
};
