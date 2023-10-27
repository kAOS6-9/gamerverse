/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        appDir: false,
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    output: "export",
    images: {
        unoptimized: true,
      },
    reactStrictMode: true,
};

module.exports = nextConfig