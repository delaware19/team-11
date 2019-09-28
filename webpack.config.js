const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') ***REMOVED***
  require('dotenv').config(***REMOVED*** path: '.env.test' ***REMOVED***);
***REMOVED*** else if (process.env.NODE_ENV === 'development') ***REMOVED***
  require('dotenv').config(***REMOVED*** path: '.env.development' ***REMOVED***);
***REMOVED***

module.exports = (env) => ***REMOVED***
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return ***REMOVED***
    entry: ['babel-polyfill', './src/app.js'],
    output: ***REMOVED***
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
***REMOVED***
    module: ***REMOVED***
      rules: [***REMOVED***
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
  ***REMOVED*** ***REMOVED***
        test: /\.s?css$/,
        use: CSSExtract.extract(***REMOVED***
          use: [
            ***REMOVED***
              loader: 'css-loader',
              options: ***REMOVED***
                sourceMap: true
          ***REMOVED***
        ***REMOVED***
            ***REMOVED***
              loader: 'sass-loader',
              options: ***REMOVED***
                sourceMap: true
          ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    ***REMOVED***)
  ***REMOVED***]
***REMOVED***
    plugins: [
      CSSExtract,
      new webpack.DefinePlugin(***REMOVED***
        'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
        'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
  ***REMOVED***)
  ***REMOVED***,
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    watch:true,
    devServer: ***REMOVED***
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
***REMOVED***
  ***REMOVED***;
***REMOVED***;
