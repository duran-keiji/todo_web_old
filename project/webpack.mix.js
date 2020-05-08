const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js(['public/dist/runtime-es2015.js',
 'public/dist/styles-es2015.js',
 'public/dist/polyfills-es2015.js',
 'public/dist/vendor-es2015.js',
 'public/dist/main-es2015.js'
 ], 'public/js/app.js')
    .sass('resources/sass/app.scss', 'public/css');
