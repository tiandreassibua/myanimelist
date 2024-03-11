/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                hostname: "avatars.githubusercontent.com",
            },
            {
                hostname: "cdn.myanimelist.net",
            },
            {
                hostname: "lh3.googleusercontent.com",
            },
        ],
    },
};

export default nextConfig;
