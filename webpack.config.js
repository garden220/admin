const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin')


module.exports = {
    //入口文件
    entry: './src/app.jsx',
    //打包配置
    output: {
        //打包路径
        path: path.resolve(__dirname, 'dist'),
        //打包js文件名称
        filename: 'app.js'
    },

    module: {
        rules: [
            //jsx文件处理
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env','react']
                    }
                }
            },
            //css文件处理
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            //scss文件处理
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            //图片配置
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    //插件
    plugins: [
        //html加载器
        new HtmlWebpackPlugin(
            //指定模板文件
            {template:'./src/index.html'}
            ),
        //加载上css插件
        new ExtractTextPlugin('index.css')
    ]
};