import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
// import vue2 from '@vitejs/plugin-vue2';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/site.css',
                'resources/css/acorns.css',
                'resources/css/slick.css',
                'resources/css/slick-theme.css',
                'resources/js/jquery-3.7.0.min.js',
                'resources/js/slick.min.js',
                'resources/js/site.js',
                'resources/js/acorns.js',

                // Control Panel assets.
                // https://statamic.dev/extending/control-panel#adding-css-and-js-assets
                // 'resources/css/cp.css',
                // 'resources/js/cp.js',
            ],
            refresh: true,
        }),
        // vue2(),
    ],
});
