'use strict';

var path = require('path'),
	srcPath = path.join(__dirname, 'web/static/js');

module.exports = {
	entry: path.join(srcPath, 'whiskeyform.js'),

	resolve: {
		root: srcPath,
		extensions: ['', '.js'],
		modulesDirectories: ['node_modules', 'src']
	},

	output: {
		path: path.join(__dirname, 'priv/static/js'),
		filename: 'app.js'
	},

	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: [/node_modules/,/src\/ignore/],
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{ test: /\.css$/, loader: 'style!css' },
			{ test: /\.eot$/, loader: 'file' },
			{ test: /\.svg$/, loader: 'file' },
			{ test: /\.ttf$/, loader: 'file' },
			{ test: /\.woff$/, loader: 'url?limit=100000' },
			{ test: /\.woff2$/, loader: 'url?limit=100000' },
			{ test: /\.png$/, exclude: /db/, loader: 'file' }
		]
	},

	devServer: {
		contentBase: './build',
		historyApiFallback: true
	}
};