const path = require("path");
const toml = require("toml");
const yaml = require("yamljs");
const json5 = require("json5");

module.exports = {
  mode: "production",
  entry: ["./src/index.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"] }, // use style-loader and css-loader to load css files
      { test: /\.xml/i, use: ["xml-loader"] }, // use xml-loader to load xml files
      { test: /\.(csv|tsv)$/i, use: ["csv-loader"] }, // use csv-loader to load csv and tsv files
      { test: /\.(png|jpe?g|gif|svg)$/i, type: "asset/resource" }, //使用webpack内置的asset/resource模块来处理图片资源
      { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: "asset/resource" }, //使用webpack内置的asset/resource模块来处理字体资源
      { test: /\.toml$/i, type: "json", parser: { parse: toml.parse } }, // 使用toml来解析toml文件
      { test: /\.(yaml|yml)$/i, type: "json", parser: { parse: yaml.parse } }, // 使用yamljs来解析yaml文件
      { test: /\.json5$/i, type: "json", parser: { parse: json5.parse } }, // 使用json5来解析json5文件
    ],
  },
};
