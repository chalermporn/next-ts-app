/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['tailwindui.com','nextjs.org'],
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  devIndicators: {
    autoPrerender: true,
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
  exportPathMap: async function ( defaultPathMap, { dev, dir, outDir, distDir, buildId } ) 
  {
    return {
      '/': { page: '/' },
      '/dashbord': { page: '/dashbord' },
      '/404': { page: '/404' },
      '/api/hello': { page: '/api/hello', query: { title: 'hello-nextjs' } },
    }
  },
}

module.exports = nextConfig
