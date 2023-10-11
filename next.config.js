/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["localhost", "res.cloudinary.com"],
    unoptimized: true,
    disableStaticImages: true,
  },
  swcMinify: false,
};

module.exports = nextConfig;
