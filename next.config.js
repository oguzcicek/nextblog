/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["react-bootstrap"]
  },
  productionBrowserSourceMaps: true,
  images: {
      domains: ['localhost', '127.0.0.1']
  },
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: 'http://127.0.0.1:3001/:path*',
      },
    ]
  },}

module.exports = nextConfig
