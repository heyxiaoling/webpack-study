let path = require('path');
let webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
  	app: [path.resolve(__dirname, './src/app.js')],
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js'
  },
  module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new htmlWebpackPlugin({
	      	filename: 'index.html'
	    })
	]
};