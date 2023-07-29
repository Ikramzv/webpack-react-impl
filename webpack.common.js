const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: {
    index: path.resolve(__dirname, "src/index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
    publicPath: "./",
    clean: true,
    assetModuleFilename: "assets/[name].[ext]",
  },
  module: {
    rules: [
      {
        test: /.(tsx|jsx|js)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
          {
            loader: "ts-loader",
          },
        ],
        include: [/src/],
      },
      {
        test: /.(jpg|jpeg|png|webp)$/,
        use: "asset/resource",
        include: [/public\/assets\//],
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".jsx", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      cache: true,
      chunks: ["index"],
    }),
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      minSize: 20 * 1024,
      minChunks: 1,
      maxAsyncRequests: Infinity,
      maxInitialRequests: Infinity,
    },
  },
};

module.exports = config;
