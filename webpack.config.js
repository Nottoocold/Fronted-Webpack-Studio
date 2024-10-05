const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const EslintWebpackPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: path.resolve(__dirname), // 项目根目录
  mode: "development", // 开发环境
  // 1. 入口配置
  entry: {
    app: "./src/index.js", // 入口文件
  },
  // 2. 输出配置
  output: {
    path: undefined, // 开发环境下不输出文件，由webpack-dev-server输出
    filename: "js/[name].[contenthash:10].bundle.js", // 入口文件输出路径
    chunkFilename: "js/chunks/[name].[contenthash:10].chunk.js", // 非入口文件输出路径
    assetModuleFilename: "assets/[contenthash:10][ext][query]", // 处理资源文件路径
  },
  // 3. 模块解析配置
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // 别名配置
    },
  },
  // 4. 开发工具配置
  devtool: "eval-cheap-module-source-map", // 开启source-map 方便调试
  // 5. 开发服务器，自动化配置
  devServer: {
    port: "9000", // 端口号
    open: true, // 自动打开浏览器
    compress: true, // 压缩传输数据
    hot: true, // 开启热更新
    client: {
      logging: "info", // 日志级别
      reconnect: 32, // 自动重连
      overlay: {
        errors: true, // 显示编译错误信息
        warnings: false, // 显示编译警告信息
        runtimeErrors: true, // 显示运行时错误信息
      },
    },
    proxy: [
      // 代理配置
      {
        context: ["/api"], // 以/api开头的请求，代理至target --> your backend api url,e.g. /api/user => http://localhost:8080/api/user
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    ],
  },
  // 6. 插件配置
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }), // 自动生成html文件
    new EslintWebpackPlugin({ configType: "flat" }), // 开启eslint检查, 版本9.0.0以上需要指定configType:flat
    // 分离css文件
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:10].css",
      chunkFilename: "css/[name].[contenthash:10].chunk.css",
    }),
  ],
  // 7. 模块配置
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
        // generator: { filename: "img/[hash:10][ext][query]" },
        parser: { dataUrlCondition: { maxSize: 4 * 1024 } },
      },
      {
        test: /\.(ttf|woff2?|mp3|mp4|avi)$/i,
        type: "asset/resource", // 处理其他资源 如字体文件
        // generator: { filename: "img/[hash:10][ext][query]" },
      },
    ],
  },
  optimization: {
    // 创建一个在所有生成 chunk 之间共享的运行时文件
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}`,
    },
    splitChunks: {
      chunks: "all", // 启用分割代码块，其余配置项参考官方文档
    },
  },
};
