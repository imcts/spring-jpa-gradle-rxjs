import webpack, { optimize, HotModuleReplacementPlugin, NoErrorsPlugin, DefinePlugin } from 'webpack';
import glob    from 'glob';
import ExtractTextPlugin  from 'extract-text-webpack-plugin';
import Es3ifyPlugin from 'es3ify-webpack-plugin';
import FlowtypePlugin from 'flowtype-loader/plugin';

import {
    HOST,
    DEV_PORT,
    RESOURCE_PATH,
    BUNDLE_PATH,
    JS_PATH,
    CONTROLLER_PATH
} from './gulp.config.js';

const { UglifyJsPlugin, OccurenceOrderPlugin } = optimize;

const regExps = {
    '.js': new RegExp('\/controller.js$'),
    '.scss': new RegExp('\/[^_]+scss$')
};

const getFileList = (pattern, remove, extension) => {
    let isBundle = regExps[extension];
    let files    = glob.sync(pattern, {'nodir': true});
    let r        = [];

    for(let i = 0, v; v = files[i]; i++) {
        v = v.replace(remove, '');

        if(isBundle.test(v))
            r.push(v);
    }

    return r;
};

const getEntry = (list) => {
    let entry = {};

    for(let i = 0, key, file, v; v = list[i]; i++) {
        file = v.replace('/js', '');
        key  = file.replace('/controller.js', '');
        entry[key] = [
            `webpack/hot/dev-server`,
            `webpack-hot-middleware/client?path=${HOST}:${DEV_PORT}/__webpack_hmr`,
            `${RESOURCE_PATH + v}`
        ];

    }

    return entry;
};


//development entry
export const CONTROLLERS = (() => getEntry(getFileList(CONTROLLER_PATH, RESOURCE_PATH, '.js')))();

//DEVELOPMENT WEBPACK OPTION
export const WEBPACK_DEVELOPMENT_CONFIG = {
    target: 'web',
    context: RESOURCE_PATH,
    devtool: 'source-map',
    cache: true,
    debug: true,

    //externals: Object.keys(REQUIRE_JS_PATH_OBJECT),

    output: {
        path: '/',
        publicPath: '/',
        filename: '[name]/bundle.min.js'
        //libraryTarget: 'amd'
    },

    resolve: {
        alias: {
            'app': `${JS_PATH}`
        }
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },

            {
                test: /\.css$/,
                loaders: [
                    'style',
                    'css'
                ]
            }
        ]
    },

    resolve: {
        alias: {
            'common': `${RESOURCE_PATH}/js/common/`
        }
    },

    plugins: [
        new HotModuleReplacementPlugin(),
        new NoErrorsPlugin(),
        new FlowtypePlugin(),
        new DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        })
    ]
};