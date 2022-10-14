/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['fintualist.com', 'images.unsplash.com', 'img.freepik.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `https://cap-paraffin.herokuapp.com/api/:path*`,
      },
      {
        source: '/users/sign_in',
        destination: `https://cap-paraffin.herokuapp.com/users/sign_in`,
      },
      {
        source: '/users/sign_out',
        destination: `https://cap-paraffin.herokuapp.com/users/sign_out`,
      },
      {
        source: '/api-docs/:path*',
        destination: `https://cap-paraffin.herokuapp.com/api-docs/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
