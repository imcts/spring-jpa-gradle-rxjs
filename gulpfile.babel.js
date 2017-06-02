import gulp    from 'gulp';
import clean   from 'gulp-clean';
import webpack from 'webpack';
import { log, PluginError } from 'gulp-util';

import { BUNDLE_PATH } from './gulp.config.js';
import { DEV_SERVER } from './webpack-dev-server';
import { CONTROLLERS, WEBPACK_DEVELOPMENT_CONFIG } from './webpack.config.js';

////////////////////////////////////////////////////////////////////////////////
//----------------------------- DEV-BUILD ----------------------------------/
////////////////////////////////////////////////////////////////////////////////
gulp.task('dev-server', () => DEV_SERVER(CONTROLLERS));