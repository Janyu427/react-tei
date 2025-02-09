import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'janyu427.github.io',
            port: '',
            pathname: '/test/teiImages/**',
          }
        ]
    }
};

export default nextConfig;
