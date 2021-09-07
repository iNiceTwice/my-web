const path = require("path");

module.exports = {
  target: "node",
  entry: "./src/app/client.js",
  output: {
    filename: "client_bundle.js",
    path: path.resolve(__dirname, "src/public"),
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
        use: ["style-loader", "css-loader"],
        test: /\.css$/
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[ext]",
              publicPath: "/",
              emitFile: false
            }
          }
        ]
      }
    ]
  }
};
