const common = require("./webpack.common");
const merge = require("webpack-merge").default;

const config = {
  mode: "development",
  devServer: {
    port: 5000,
    hot: true,
    client: {
      progress: true,
      reconnect: true,
    },
    onListening: function (devServer) {
      const address = devServer.server.address();
      console.log("Listening:", address);
    },
    historyApiFallback: true,
  },
  devtool: "inline-source-map",
};

module.exports = merge(common, config);
