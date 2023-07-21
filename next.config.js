/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ethings-api.ninepmx.my.id",
        port: "",
        pathname: "/api/public/download/*",
      },
    ],
  },
};

module.exports = nextConfig;
