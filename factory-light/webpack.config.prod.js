let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractLESS = new ExtractTextPlugin('common.css');

module.exports = {
	entry: {
	  	app: [
	  		path.resolve(__dirname, './src/index.js')
	  	],
	  	vendor:[
	  		'react',
            'react-dom'
	  	]
  	},
  	output: {
	    path: path.resolve(__dirname, './dist'),
	    filename: '[hash].[name].js',
	    publicPath: '/'
  	},
  	devtool: false,
  	module: {
		rules: [
			{
				test: /\.less$/i,
				use: extractLESS.extract([ 'css-loader', 'less-loader' ])
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
	        },
	        {
		        test: /\.js$/,
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
		extractLESS,
		new webpack.HotModuleReplacementPlugin(),
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
