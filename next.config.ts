import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

module.exports = {
    images: {
        remotePatterns: [
            new URL('https://books.google.com'),
            {
                protocol: 'https',
                hostname: 'books.google.com',
                port: '',
                pathname: '',
            }

        ],
    },
}

export default nextConfig;
