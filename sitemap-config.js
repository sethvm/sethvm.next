module.exports = {
    siteUrl: 'https://sethvm.com',
    changefreq: 'monthly',
    priority: 1,
    lastmod: new Date().toISOString(),

    additionalPaths: async () => {
        const result = [];

        result.push(
            {
                loc: '/about',
                priority: 0.8,
            },
            {
                loc: '/ops-pick-history',
                priority: 0.7,
            },
            {
                loc: '/proximity-transfer',
                priority: 0.7,
            },
            {
                loc: '/patient-support-app',
                priority: 0.7,
            }
        );

        return result;
    },
};
