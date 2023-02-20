/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["react-bootstrap"]
  },
  productionBrowserSourceMaps: true,
  images: {
      domains: ['localhost']
  },
}

module.exports = nextConfig
