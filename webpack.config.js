const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js", // 入口文件1
    print: "./src/print.js", // 入口文件2
  },
  output: {
    filename: "[name].bundle.js", // 根据入口文件名生成打包后的文件名
    path: path.resolve(__dirname, "dist"),
  }
};
