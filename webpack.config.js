const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const config = {
    mode:"development",
    entry : [
        './src/assets/ts/app.ts',
        './src/assets/scss/global.scss',
    ],
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'app.js',
    },
    module : {
        rules: [
            {
                test : /\.ts$/,
                use : 'ts-loader',
                exclude : /node_modules/,
            },
            {
                test : /\.s[ac]ss$/i,
                use : ['style-loader','css-loader','sass-loader'],
            }
        ]
    },
    resolve : {
        extensions: ['.ts','.js','.css'],
    },
    plugins : [new HtmlWebpackPlugin({template:'./index.html'})]
}

module.exports = config;