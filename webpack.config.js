const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Clean the dist folder before each build
  },
  mode: "development", // Change to 'production' when ready
  module: {
    rules: [
      {
        test: /\.css$/i, // Match any .css file
        use: ["style-loader", "css-loader"], // Loaders to handle CSS
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Your HTML template
    }),
  ],
  devServer: {
    static: "./dist",
    open: true, // Auto-opens your browser
    hot: true, // Enables hot reloading
    port: 3000, // Optional: choose your port
  },
};
