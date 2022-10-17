const path = require('path')

const { VueLoaderPlugin } = require('vue-loader')
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: 'vue-style-loader'
                },
                {
                    loader: 'css-loader'
                }
                ]
            },
            {
                test: /\.vue$/,
                exclude: /(node_modules)/,
                loader: 'vue-loader'
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                }
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    devServer: {
        hot: true,
        static: {
            directory: path.join(__dirname, "./")
        },
    }
}