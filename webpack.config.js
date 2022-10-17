const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const { VueLoaderPlugin } = require('vue-loader')
const { DefinePlugin } = require('webpack')
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// const HtmlWebpackPlugin = require('html-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';

module.exports = {
    entry: './src/main.ts',
    mode: NODE_ENV,
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
                    loader: 'css-loader',
                    options: {
                        sourceMap: IS_DEV,
                    }
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
                test: /\.html$/i,
                loader: "html-loader",
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
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false
                        }
                    },
                ],
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new DefinePlugin({
            __VUE_OPTIONS_API__: false,
            __VUE_PROD_DEVTOOLS__: false,
        }),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
    ],
    devServer: {
        hot: true,
        compress: true,
    },
    devtool: IS_DEV ? 'eval' : false
}