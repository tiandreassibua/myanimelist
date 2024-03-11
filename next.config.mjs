/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                hostname: "placehold.co",
            },
            {
                hostname: "cdn.myanimelist.net",
            },
        ],
    },
};

export default nextConfig;
