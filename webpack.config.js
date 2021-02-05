const path = require('path');

module.exports = {
  entry: './resources/js/app.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      // Compiles files that come with fontawesome
      { test: /\.(png|gif|jpg|cur)$/i, loader: 'url-loader', options: { limit: 8192 } },
      { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff2' } },
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff' } },
      { test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'file-loader' }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    alias: {
      '@': path.resolve(__dirname, './resources/js')
    }
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, './public/js'),
  },
  devServer: {
    contentBase: path.join(__dirname, './public'),
    compress: true,
    port: 9000
  }
};
