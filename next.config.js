const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    WEBSITE_HOST_URL: process.env.WEBSITE_HOST_URL,
  }
}

module.exports = withContentlayer(nextConfig)
