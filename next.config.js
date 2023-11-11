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
  async headers() {
    return [
        {
            // matching all API routes
            source: "/:path*",
            headers: [
                { key: "Access-Control-Allow-Credentials", value: "true" },
                { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT,OPTIONS" },
                { key: "Access-Control-Allow-Headers", value: "*" },
            ]
        }
    ]
  }
}

module.exports = nextConfig
