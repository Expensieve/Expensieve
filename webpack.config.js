const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { title } = require("process");

module.exports = {
  entry: "./index.tsx",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "/dist"),
    publicPath: "/",
  },
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        // use: ['ts-loader', 'babel-loader'],
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "index.html",
      title: "development"
    }),
  ],
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    port: 8080,
    open: true,
    /*
     * The previous history page will be served in place of any 404 responses.
     * To allow working with nodemon backend server.
     */
    historyApiFallback: true,
    // proxy: {
    //   '/recipe': 'http://localhost:3000',
    //   '/tasty': 'http://localhost:3000',
    // },
  },
};
