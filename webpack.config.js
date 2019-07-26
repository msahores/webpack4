const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

  entry: './src/javascript/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
                {
                  // After all CSS loaders we use plugin to do his work.
                  // It gets all transformed CSS and extracts it into separate
                  // single bundled file
                  loader: MiniCssExtractPlugin.loader
                },
               {
                 // This loader resolves url() and @imports inside CSS
                 loader: "css-loader",
               },
               {
                 // Then we apply postCSS fixes like autoprefixer and minifying
                 loader: "postcss-loader"
               },
               {
                 // First we transform SASS to standard CSS
                 loader: "sass-loader",
                 options: {
                   implementation: require("sass")
                 }
               }
             ]
      }
    ]
  },
  plugins: [

    new MiniCssExtractPlugin({
      filename: "bundle.css"
    })
  
  ]
};
