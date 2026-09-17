/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"]
    }
}

module.exports = nextConfig
