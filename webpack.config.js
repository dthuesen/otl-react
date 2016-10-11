const debug   = process.env.NODE_ENV !== "production";
const path    = require('path'),
      join    = path.join,
      resolve = path.resolve;
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname + "/src",
    devtool: debug ? "inline-sourcemap" : null,
    // entry: "./js/client.js",
    entry: [
        './js/client.js'
    ],
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
            }
        },
        // Load plain-ol' vanilla CSS
        { 
            test: /\.scss$/, 
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        },
        ]
    },
    // output: {
    //     path: __dirname + "/src/",
    //     filename: "client.min.js"
    // },
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
        new ExtractTextPlugin("style.css", {allChunks: false}),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
};