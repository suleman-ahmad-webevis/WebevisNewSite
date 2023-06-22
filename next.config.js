/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");
const nextConfig = {
  reactStrictMode: true,
  withVideos: require("next-videos"),
  withVideos,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
