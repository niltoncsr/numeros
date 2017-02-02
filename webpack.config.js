module.exports = {
	entry: './src/numeros.js',
	output: {
		path: './dist',
		filename: 'numeros.min.js'
	},
	module: {
		loaders: [
			{test: /\.js$/, loader: 'eslint-loader', exclude: '/node_modules/'}
		]
	}
}
