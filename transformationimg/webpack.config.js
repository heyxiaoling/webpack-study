let path = require('path');
let webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		img: [path.resolve(__dirname, './src/img.js')]
	},
	output: {
		path: path.resolve(__dirname, './build'),
		filename: '[name].js'
	},
	module: {
		loaders: [
			{ test: /\.png$/, loader: "url-loader?mimetype=image/png" }
		],
		rules: [
	  		{
		        test: /\.less$/,
		        use: [
		          'style-loader',
		          { loader: 'css-loader', options: { importLoaders: 1 } },
		          'less-loader'
		        ]
	        }
	    ]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new htmlWebpackPlugin({
			filename: 'img.html',
	      	template: path.resolve(__dirname,'./static/html/img.html')
	    })
	]
};