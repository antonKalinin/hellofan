const path = require('path');

module.exports = {
    devtool: 'eval',

    entry: ['babel-polyfill', 'index.js'],

    output: {
        filename: 'app.js',
        publicPath: 'dist',
        path: path.resolve('dist'),
    },

    devServer: {
        port: 3000,
        inline: true,
        historyApiFallback: true,
    },

    resolve: {
        extensions: ['.js', '.json', '.css'],
        modules: ['src', 'node_modules'],
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                include: __dirname,
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]__[local]_[hash:base64:3]',
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
};
