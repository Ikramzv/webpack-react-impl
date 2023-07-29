const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const config = {
  mode: "production",
  devtool: "cheap-module-source-map",
};

module.exports = merge(common, config);
