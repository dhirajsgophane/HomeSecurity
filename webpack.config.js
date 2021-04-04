const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	entry: path.join(__dirname, './src/app.jsx'),
	devServer: {
		open: true
	},
	output: {
		path: __dirname,
		filename: 'app.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.png/,
				use: 'file-loader'
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'main.css'
		})
	]
};
