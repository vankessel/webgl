const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

// Make sure devServer.publicPath always starts and ends with a forward slash.
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: nodeModulesPath,
            },
            {
                test: /\.glsl$/,
                loader: 'raw-loader',
                exclude: nodeModulesPath,
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'file-loader',
                exclude: nodeModulesPath,
                options: {
                    name: '[path][name].[ext]',
                    publicPath: '/build/',
                },
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'build/'),
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    devServer: {
        contentBase: __dirname,
        publicPath: '/build/',
    },
};
