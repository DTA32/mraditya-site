/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.scdn.co",
                pathname: "/image/**",
            },
            {
                protocol: "https",
                hostname: "cdn.jsdelivr.net",
                pathname: "/gh/devicons/devicon/icons/**",
            },
            {
                protocol: "https",
                hostname: "assets.mraditya.my.id",
                pathname: "/**",
            },
        ],
    },
};

module.exports = nextConfig;
