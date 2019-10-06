"use strict";

const path = require("path");

module.exports = {
	
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  mode: "development",
  
  // The application entry point
  entry: "./src/index.tsx",

  // Where to compile the bundle
  // By default the output directory is `dist`
  output: {
    filename: "bundle.js"
  },

  // Supported file loaders
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  },

  // File extensions to support resolving
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};