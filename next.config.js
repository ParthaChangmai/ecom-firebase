/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	images: {
		allowFutureImage: true,
		domains: ['images.samsung.com'],
	},
};

module.exports = nextConfig;
