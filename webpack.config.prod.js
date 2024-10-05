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
    // main: './src/pages/index.js',
    // util: "./src/js/print.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"), // 项目打包输出的根目录
    filename: "js/[name].[contenthash:10].bundle.js", // 入口文件输出路径
    chunkFilename: "js/chunks/[name].[contenthash:10].chunk.js", // 非入口文件输出路径
    assetModuleFilename: "assets/[contenthash:10][ext][query]", // 处理资源文件路径
    clean: true, // 每次打包前清空dist目录
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // 别名配置
    },
  },
  devtool: "source-map",
  plugins: [
    // 自动生成html文件
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new EslintWebpackPlugin({ configType: "flat" }), // 开启eslint检查, 版本9.0.0以上需要指定configType:flat
    // 分离css文件
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:10].css",
      chunkFilename: "css/[name].[contenthash:10].chunk.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          }
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
        // generator: { filename: "assets/images/[hash:10][ext][query]" },
        parser: { dataUrlCondition: { maxSize: 4 * 1024 } },
      },
      {
        test: /\.(ttf|woff2?|mp3|mp4|avi)$/i,
        type: "asset/resource", // 处理其他资源 如字体文件
        // generator: { filename: "assets/[hash:10][ext][query]" },
      },
    ],
  },
  optimization: {
    // 创建一个在所有生成 chunk 之间共享的运行时文件
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}.js`,
    },
    splitChunks: {
      chunks: "all", // 启用分割代码块，其余配置项参考官方文档...默认行为：1.将node_modules中的模块打包到单独的bundle中 2.将动态导入的模块打包到单独的bundle中
    },
    minimizer: [new CssMinimizerPlugin(), "..."],
  },
};
