const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const Handlebars = require('handlebars');

module.exports = {
  entry: './src/main.js',
  devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 3001
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        // options: {
        //   preprocessor: (content, loaderContext) => {
        //     let result;
        //
        //     try {
        //       result = Handlebars.compile(content)({});
        //     } catch (error) {
        //       loaderContext.emitError(error);
        //
        //       return content;
        //     }
        //
        //     return result;
        //   },
        // },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          {
            loader: 'postcss-loader', // Run postcss actions
            options: {
              plugins: function () { // postcss plugins, can be exported to postcss.config.js
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif|ico|txt|xml|webmanifest)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      devServer: 'http://localhost:3001',
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};