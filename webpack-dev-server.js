import webpack from 'webpack';
import express from 'express';
import proxy from 'express-http-proxy';

import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import { HOST, TOMCAT_PORT, DEV_PORT, RESOURCE_PATH, BUNDLE_PATH, JS_PATH } from './gulp.config.js';
import { WEBPACK_DEVELOPMENT_CONFIG } from './webpack.config.js';

export const DEV_SERVER = (entry) => {
    //set env setting.
    process.env.NODE_ENV = 'development';

    let config = {
        ...WEBPACK_DEVELOPMENT_CONFIG,
        entry: entry
    };

    let compiler = webpack(config);

    let server = express();

    let option = {
        contentBase: RESOURCE_PATH,
        progress: true,
        hot: true,
        watch: true,
        verbose: true,
        publicPath: config.output.publicPath,
        historyApiFallback: true,
        stats: {
            cached: true,
            cachedAssets: true,
            chunks: true,
            chunkModules: false,
            colors: true,
            hash: false,
            reasons: true,
            timings: true,
            version: false
        }
    };

    //middle ware setting
    server.use(webpackDevMiddleware(compiler, option));

    //hot module setting
    server.use(webpackHotMiddleware(compiler));

    server.get(/^\/resources\/.*\/bundle.min.js/, function (req, res) {
        const url = req.url;
        const redirectUrl = url.replace(new RegExp('/resources', 'g'), '');

        res.redirect(redirectUrl);
    });

    //redirect all.
    server.use(proxy(`${HOST}:${TOMCAT_PORT}`));

    //server start
    server.listen(DEV_PORT, err => err ? console.log(err) : console.log('start dev server .'));
};
