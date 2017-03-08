let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let ExtractLESS = new ExtractTextPlugin('common.css');

module.exports = {
	entry: {
	  	app: [
	  		path.resolve(__dirname, './src/app/index.es6')
	  	],
	  	vendor:[
	  		'react',
            'react-dom'
	  	]
  	},
  	output: {
	    path: path.resolve(__dirname, './dist'),
	    filename: '[name].js',
  	},
  	devtool: false,
  	module: {
		rules: [
			{
				test: /\.less$/i,
				use: ExtractLESS.extract([ 'css-loader', 'less-loader' ])
			},
			{
				test: /\.scss$/i,
				use: ExtractLESS.extract([ 'css-loader', 'sass-loader' ])
			},
	        {
		        test: /\.(js|es6)$/,
		        use: [
		          'babel-loader',
		        ],
		        exclude: /node_modules/
	        },
	        {
		        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
		        use: [
		          {
		            loader: 'url-loader',
		            options: {
		              limit: 100000
		            }
		          }
		        ]
		    }
	    ]
	},
	plugins: [
		ExtractLESS,
	    new webpack.optimize.CommonsChunkPlugin({
	    	name: 'vendor', 
	    	filename: 'vendor.bundle.js'
	    }),
        new HtmlWebpackPlugin({
			filename: 'index.html',
	      	template: path.resolve(__dirname,'./static/template/index.html')
	    }),
	    new webpack.optimize.UglifyJsPlugin(),
	    new webpack.DefinePlugin({
        	'process.env.NODE_ENV': JSON.stringify('production')
	    })
	]
}
