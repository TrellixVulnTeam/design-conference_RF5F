const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackCopyPlugin = require('copy-webpack-plugin');


module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './index.js',
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name]-bundle.css'
        }),
        new WebpackCopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets/img/logo.svg'),
                    to: path.resolve(__dirname, 'dist')
                },
                {
                    from: path.resolve(__dirname, 'src/assets/img/info.svg'),
                    to: path.resolve(__dirname, 'dist')
                },
                {
                    from: path.resolve(__dirname, 'src/assets/img/silent-picture.png'),
                    to: path.resolve(__dirname, 'dist')
                },
                {
                    from: path.resolve(__dirname, 'src/assets/img/earn-picture.png'),
                    to: path.resolve(__dirname, 'dist')
                },
                {
                    from: path.resolve(__dirname, 'src/assets/img/slider-img1.png'),
                    to: path.resolve(__dirname, 'dist'),
                },
                {
                    from: path.resolve(__dirname, 'src/assets/img/slider-img2.png'),
                    to: path.resolve(__dirname, 'dist'),
                },
                {
                    from: path.resolve(__dirname, 'src/assets/img/slider-img3.png'),
                    to: path.resolve(__dirname, 'dist'),
                },
                {
                    from: path.resolve(__dirname, 'src/assets/img/slider-img4.png'),
                    to: path.resolve(__dirname, 'dist'),
                },
                {
                    from: path.resolve(__dirname, 'src/assets/img/programm-bg.png'),
                    to: path.resolve(__dirname, 'dist')
                },
                {
                    from: path.resolve(__dirname, 'src/assets/img/join-img.png'),
                    to: path.resolve(__dirname, 'dist')
                },
                {
                    from: path.resolve(__dirname, 'src/assets/img/gallery-img1.png'),
                    to: path.resolve(__dirname, 'dist')
                },
                {
                    from: path.resolve(__dirname, 'src/assets/img/gallery-img2.png'),
                    to: path.resolve(__dirname, 'dist')
                },
                {
                    from: path.resolve(__dirname, 'src/assets/img/gallery-img3.png'),
                    to: path.resolve(__dirname, 'dist')
                },
                {
                    from: path.resolve(__dirname, 'src/assets/img/gallery-img4.png'),
                    to: path.resolve(__dirname, 'dist')
                },
                {
                    from: path.resolve(__dirname, 'src/assets/img/gallery-img5.png'),
                    to: path.resolve(__dirname, 'dist')
                },
                {
                    from: path.resolve(__dirname, 'src/assets/img/gallery-img6.png'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: ['file-loader']
            },
            {
                test: /\.(otf|ttf|eot|woff|woff2)$/,
                use: ['file-loader']
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                use: ['css-loader', 'sass-loader']
            },
        ]
    }
};