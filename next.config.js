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
}

module.exports = nextConfig
