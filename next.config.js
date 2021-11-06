const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');


const nextConfiguration = {
  target: 'serverless', //will output independent pages that don't require a monolithic server. It's only compatible with next start or Serverless deployment platforms (like ZEIT Now) — you cannot use the custom server API.
  async rewrites() {
    return [
      // {
      //   source: '/:path*',
      //   destination: `/:path*`,
      // },
      // {
      //   source: '/templates',
      //   destination: `${TEMPLATE_URL}/templates`,
      // },
      // {
      //   source: '/templates/:path*',
      //   destination: `${TEMPLATE_URL}/templates/:path*`,
      // },
    ]
  },
};

module.exports = withPlugins([optimizedImages], nextConfiguration);
