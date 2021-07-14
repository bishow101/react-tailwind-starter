const path = require("path")
const { HotModuleReplacementPlugin } = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');


const devMode = process.env.NODE_ENV !== "production"
const HOST = '127.0.0.1'
const PORT = 3000

const plugins = [
	new MiniCssExtractPlugin({
		filename: devMode ? '[name].css' : '[name].[contenthash].css' ,
		chunkFilename: devMode ? '[id].css' : '[id].[contenthash].css',
		experimentalUseImportModule: true,
	}),
	
	
	new HtmlWebpackPlugin({
		template: path.resolve(__dirname, 'public', 'index.html'),
		filename: 'index.html'
	}),
	
	new ESLintPlugin({
		extensions: ['js', 'jsx'],
		exclude: ['node_modules']
	}),
	
	new CleanTerminalPlugin({
		message: `dev server running on http://${HOST}:${PORT}`,
		onlyInWatchMode: false,
    })
]
	
if(devMode) plugins.push(new HotModuleReplacementPlugin())

module.exports = {
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].bundle.js'
	},
	
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: path.resolve(__dirname, 'src'),
				exclude: '/node_modules',
				use: [
					{
						loader: 'babel-loader',
					}
				]
			},
			
			{
				test: /\.css$/i,
				include: path.resolve(__dirname, 'src'),
				exclude: /node_modules/,
				use: [
					'style-loader',
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							emit: devMode,
							esModule: false
						},
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						},
					},
					'postcss-loader'
				]
			},
		]
	},
	
	plugins,
	
	optimization: {
		minimizer: [`...`, new CssMinimizerPlugin()]
	},
	
	devServer: {
		open: true,
		clientLogLevel: 'silent',
		contentBase: './build',
		historyApiFallback: true,
		hot: true,
		overlay: true,
		host: HOST,
		port: PORT,
		stats: 'none'
	},
	
	devtool: 'source-map',
}
