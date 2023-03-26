/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'mentorkgapi.pythonanywhere.com',
				port: '',
				pathname: '',
			},
		],
	},
}

module.exports = nextConfig
