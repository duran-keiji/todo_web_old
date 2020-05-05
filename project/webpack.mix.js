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

mix.js(['public/dist/runtime.js',
 'public/dist/styles.js',
 'public/dist/polyfills.js',
 'public/dist/vendor.js',
 'public/dist/main.js'
 ], 'public/js/app.js')
    .sass('resources/sass/app.scss', 'public/css');
