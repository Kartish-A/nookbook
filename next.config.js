/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  ...nextConfig,
  env: {
    REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
  },
  images: {
    domains: ['books.google.com'], 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'books.google.com/content',
        port: '',
        pathname: '/books/content**',
      },
    ],
  },
};

