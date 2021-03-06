const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	entry: path.join(__dirname, './src/HomeSecurity/HomeSecurity.jsx'),
	devServer: {
		open: true
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
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
