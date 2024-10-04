const { default: test } = require("node:test");
const path = require("path");

module.exports = {
  mode: "production",
  entry: ["./src/index.js"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"] }, // use style-loader and css-loader to load css files
      { test: /\.xml/i, use: ["xml-loader"] }, // use xml-loader to load xml files
      { test: /\.(csv|tsv)$/i, use: ["csv-loader"] }, // use csv-loader to load csv and tsv files
      { test: /\.(png|jpe?g|gif|svg)$/i, type: "asset/resource" }, //使用webpack内置的asset/resource模块来处理图片资源
      { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: "asset/resource" }, //使用webpack内置的asset/resource模块来处理字体资源
    ],
  },
};
