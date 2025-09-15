/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@reown/appkit',
    '@reown/appkit-adapter-wagmi'
  ]
};

export default nextConfig;
