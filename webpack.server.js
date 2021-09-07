const path = require("path")
const webpackNodeExternals = require("webpack-node-externals")

module.exports = {
  target: "node",
  entry: "./src/server/server.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./src/public"),
    publicPath: "./src/public"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
        options: {
          presets: ["@babel/react", "@babel/env"]
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              emitFile: false,
              name: "[name].[ext]",
              publicPath: "/img/"
            }
          }
        ]
      }
    ]
  },
  externals: [webpackNodeExternals()]
}; 