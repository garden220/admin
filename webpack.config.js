const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = {
    //入口文件
    entry: './src/app.jsx',
    //打包配置
    output: {
        //打包路径
        path:       path.resolve(__dirname, 'dist'),
        //打包根目录
        publicPath: '/dist/',
        //打包js文件名称
        filename:   'js/app.js'
    },
    //模块文件存放路径
    resolve:{
        alias:{
            page:       path.resolve(__dirname, 'src/page'),
            component:  path.resolve(__dirname, 'src/component')
        }
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
                            limit: 8192,
                            name:'resource/[name].[ext]'
                        }
                    }
                ]
            },
            //字体配置
            {
                test: /\.(ttf|svg|eot|woff)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name:'resource/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.json$/,
                use:[
                    {
                        loader: 'json-loader',
                        options: {
                            limit: 8192,
                            name:'js/[name].[ext]'
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
            //指定模板文件,处理html文件
            {template:'./src/index.html'}
            ),
        //加载上css插件，处理css文件
        new ExtractTextPlugin('css/[name].css'),
        //提出公共模块
        new webpack.optimize.CommonsChunkPlugin({
            name:'common',
            filename:'js/base.js'
        })
    ],
    devServer:{
        //端口
        port:8066,
        //404页面
        historyApiFallback:{
            index:'/dist/index.html'
        }
    }
};