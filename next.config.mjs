/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/article',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
