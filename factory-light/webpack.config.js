let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractLESS = new ExtractTextPlugin('./common.css');

module.exports = {
	entry: {
		  	app: [
		  		"webpack-dev-server/client?http://0.0.0.0:8888/", 
		  		"webpack/hot/dev-server",
		  		path.resolve(__dirname, './src/app/index.es6')
		  	],
	  	},
	  	output: {
		    path: path.resolve(__dirname, './assets'),
		    filename: '[hash].[name].js',
		    publicPath: '/'
	  	},
	  	devServer: {
	        port: 8888,
	    },
	  	devtool: 'cheap-module-source-map',
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
			extractLESS,
			new webpack.HotModuleReplacementPlugin(),
		    new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: function (module) {
                   return module.context && module.context.indexOf('node_modules') !== -1;
                }
            }),
            new HtmlWebpackPlugin({
				filename: 'index.html',
		      	template: path.resolve(__dirname,'./static/template/index.html')
		    }),
		    new webpack.DefinePlugin({
	        	'process.env.NODE_ENV': JSON.stringify('production')
		    }),
		    new webpack.LoaderOptionsPlugin({
				options: {
					context: __dirname
				}
			})
		]
}
