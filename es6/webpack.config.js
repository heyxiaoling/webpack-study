let path = require('path');
let webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
  	app: [path.resolve(__dirname, './src/index.js')],
  	assign: [path.resolve(__dirname, './src/assign.js')]
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
	      	filename: 'index.html',
      		chunks: ["app"]
	    }),
	    new htmlWebpackPlugin({
	      	filename: 'assign.html',
      		chunks: ["assign"]
	    })
	]
};