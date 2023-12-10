/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**"  //accept all img url
            }
        ]
    },

}

module.exports = nextConfig
