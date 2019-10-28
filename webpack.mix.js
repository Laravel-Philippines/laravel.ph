const mix = require('laravel-mix');

const aliases = {
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
            '@screens': path.resolve(__dirname, 'resources/js/screens'),
            '@components': path.resolve(__dirname, 'resources/js/components'),
        }
    }
}

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .webpackConfig(aliases)
   .version();
