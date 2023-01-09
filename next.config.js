/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  async redirects(){
    return[
      {
        source: '/category/:category',
        destination: '/category/:category/1',
        permanent: true
      }
    ]
  }
}