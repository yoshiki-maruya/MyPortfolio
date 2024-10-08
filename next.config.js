const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    WEBSITE_HOST_URL: process.env.WEBSITE_HOST_URL,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
  }
}

module.exports = withContentlayer(nextConfig)
