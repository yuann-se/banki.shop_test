const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const { VueLoaderPlugin } = require('vue-loader')
const { DefinePlugin } = require('webpack')

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';

module.exports = {
    resolve: {
        extensions: ['.js', '.ts']
    },
    entry: path.resolve(__dirname, './src/main.ts'),
    mode: NODE_ENV,
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /(node_modules)/,
                use: ['vue-loader']
            },
            {
                test: /\.ts$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                }],

            },
            {
                test: /\.css$/,
                use: ['vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: IS_DEV,
                        }
                    }
                ]
            },
            {
                test: /\.html$/i,
                use: ["html-loader"],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                }]
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
            template: path.resolve(__dirname, './src/index.html')
        }),
    ],
    devServer: {
        hot: true,
        compress: true,
        historyApiFallback: true
    },
    devtool: IS_DEV ? 'eval' : false,
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
}