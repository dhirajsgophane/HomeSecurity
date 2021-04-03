const path = require('path');

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
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	}
};
