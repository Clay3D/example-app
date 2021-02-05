const mix = require('laravel-mix');
const path = require('path');

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

mix
  .ts('resources/js/app.tsx', 'public/js/app.js')
  .sass('resources/sass/app.scss', 'public/css')
  .webpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './resources/js')
      }
    }
  });
