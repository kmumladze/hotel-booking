/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.trvl-media.com',
      },
    ],
  },
};

export default nextConfig;
