/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// fontLoaders: [
	// 	{ loader: '@next/font/google', options: { subsets: ['latin'] } },
	// ],
	images: {
		dangerouslyAllowSVG: true,
		contentDispositionType: 'attachment',
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'mentorkgapi.pythonanywhere.com',
			},
			{
				protocol: 'http',
				hostname: 'localhost:3000',
			},
			{
				protocol: 'https',
				hostname: 'getmentor.dev',
			},
			{
				protocol: 'https',
				hostname: 'getmentor.blob.core.windows.net',
			},
		],
		domains: ['localhost:3000'],
	},
}

module.exports = nextConfig
