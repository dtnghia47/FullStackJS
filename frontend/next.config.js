const withSass = require('@zeit/next-sass');
const withTypescript = require('@zeit/next-typescript');

require('dotenv').config();

module.exports = withTypescript(
    withSass({
        sassLoaderOptions: {
            sourceMap: true,
        },
        webpack(config, options) {
            // we can custom webpack in here
            // about code splitting, nextjs supported in version 9 (current version)
            return config;
        },
        publicRuntimeConfig: {
        },
    }),
);
