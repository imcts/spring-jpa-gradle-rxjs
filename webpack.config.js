var webpack = require('webpack');

var HOST = 'localhost';
var PORT = 3000;
var ROOT_PATH = __dirname;
var RESOURCES_PATH = ROOT_PATH + '/src/main/webapp/WEB-INF/resources/';
var JS_PATH = RESOURCES_PATH + 'js/';
var BUNDLE_PATH = JS_PATH + 'bundle/';


module.exports = {
    entry: `${JS_PATH}home/controller.js`,

    devtool: 'source-map',
    cache: true,
    debug: true,

    contentBase: JS_PATH,

    output: {
        path: '/',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel']
            }
        ]
    },
    watch: true,
    progress: true,
    devServer: {
        host: HOST,
        port: PORT,
        contentBase: JS_PATH,
        inline: true
    }
};