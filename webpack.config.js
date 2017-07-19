module.exports = {
		entry: [
				'webpack-dev-server/client?http://localhost:8080',
				'webpack/hot/only-dev-server',
				'./src/index.js'
		],
		module: {
				rules: [
						{
								test: /\.js$/,
								exclude: /node_modules/,
								loader: 'eslint-loader'
						},
				],
				loaders: [{
						test: /index.js?$/,
						exclude: /node_modules/,
						loader: 'react-hot-loader!babel-loader'
				}/*,
				{
						test: /\.js$/,
						exclude: /node_modules/,
						loader: 'eslint-loader'
				}*/
				]
		},
		resolve: {
				extensions: ['*', '.js', '.jsx']
		},
		output: {
				path: __dirname + '/dist',
				publicPath: '/',
				filename: 'bundle.js'
		},
		devServer: {
				contentBase: './dist',
				hot: true
		}
};
