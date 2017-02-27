let path = require('path');
let webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		less: [path.resolve(__dirname, './src/less.js')],
		sass: [path.resolve(__dirname, './src/sass.js')]
	},
	output: {
		path: path.resolve(__dirname, './build'),
		filename: '[name].js'
	},
	module: {
	  	rules: [
	  		{
		        test: /\.less$/,
		        use: [
		          'style-loader',
		          { loader: 'css-loader', options: { importLoaders: 1 } },
		          'less-loader'
		        ]
	        },
	        {
	            test: /\.scss$/,
	            use: [{
	                loader: "style-loader" // creates style nodes from JS strings
	            }, {
	                loader: "css-loader" // translates CSS into CommonJS
	            }, {
	                loader: "sass-loader" // compiles Sass to CSS
	            }]
	        }
	    ]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new htmlWebpackPlugin({
	      	filename: 'less.html',
      		chunks: ["less"]
	    }),
	    new htmlWebpackPlugin({
	      	filename: 'sass.html',
      		chunks: ["sass"]
	    })
	]
};