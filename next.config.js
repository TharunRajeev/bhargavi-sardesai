/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'bhargavi-sardesai'; // replace if needed

const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
  webpackDevMiddleware: {
    watchOptions: {
      poll: 1000,
      aggregateTimeout: 300,
    },
  },
};

module.exports = nextConfig;
