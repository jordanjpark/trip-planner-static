var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: ['./src/index.js', './src/style.scss'], // the starting point for our program
  output: {
    path: __dirname, // the absolute path for the directory where we want the output to be placed
    filename: 'public/bundle.js' // the name of the file that will contain our output - we could name this whatever we want, but bundle.js is typical
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        loader: ExtractTextPlugin.extract(["css-loader", "sass-loader"])
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "public/"
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "public/bundle.css",
      allChunks: true
    })
  ]
};
