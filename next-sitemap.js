module.exports = {
  siteUrl: 'https://pizzaperu.pe/',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  // exclude: ['/protected-page', '/awesome/secret-page'],
  // Default transformation function
  transform: async (config, path) => ({
    loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
    changefreq: config.changefreq,
    priority: config.priority,
    lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
  }),
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'test-bot',
        allow: ['/path', '/path-2'],
      },
      {
        userAgent: 'black-listed-bot',
        disallow: ['/sub-path-1', '/path-2'],
      },
    ],
  },
};
