/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        appDir: false,
    },
    images: {
        domains: [
          'https://kaos6-9.github.io/gamerverse/',
        ]
      },
};

module.exports = 
{
    nextConfig: nextConfig,
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      }
}