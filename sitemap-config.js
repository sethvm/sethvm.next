module.exports = {

    // sitemap config parameters
    siteUrl: 'https://sethvm.com',
    generateIndexSitemap: false,
    autoLastmod: false,
    changefreq: 'monthly',
    lastmod: new Date().toISOString(),

    // custom transform function
    transform: async (config, path) => {

        if (path === '/') {
            priority = 1;
        } else if (path === '/about') {
            priority = 0.8;
        } else {
            priority = 0.7;
        }

        return {
            loc: path,
            priority: priority,
            changefreq: config.changefreq,
            lastmod: config.lastmod,
        }
    }
};
