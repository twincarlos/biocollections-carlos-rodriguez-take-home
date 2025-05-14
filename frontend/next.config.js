const nextConfig = {
    async rewrites() {
        return process.env.NODE_ENV === 'development'
            ? [
                {
                    source: '/api/:path*',
                    destination: 'http://localhost:8000/:path*'
                },
            ]
            : [];
    },
};

module.exports = nextConfig;  