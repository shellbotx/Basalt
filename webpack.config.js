const webpack = require('webpack');
const path = require('path');
const export_dir = path.resolve(__dirname, 'dist');
const base_dir = path.resolve(__dirname, 'src');


const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');


const config = {
	context: base_dir,

	entry: {
		basalt: ['./script.js', './scss/theme.scss'],
	},

	output: {
		path: export_dir,
		filename: '[name].bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: { loader: 'babel-loader' }
			},

			{
				test: /\.pug$/,
				use: { loader: 'pug-loader' }
			},

			{
				test: /\.(sa|sc|c)ss$/,
				include: base_dir,
				use: [
					MiniCssExtractPlugin.loader, 
					{
						loader: 'replace-string-loader',
						options: {
							search: /\/\*---/g,
							replace: '',
							file: false
						}
					},
					'css-loader',
					'sass-loader',
				]
			},
		]
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	},

	plugins: [
		new CleanWebpackPlugin([export_dir]),
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
		}),
		new HtmlWebpackPlugin({
			filename: 'basalt.html',
			template: './template/index.pug',
			inlineSource: '(basalt.bundle.js|basalt.css)', // only inline js and css
			excludeChunks: ['vendors'],
		}),
		new HtmlWebpackInlineSourcePlugin()
	],
};

module.exports = config;
