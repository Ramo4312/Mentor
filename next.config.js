/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	fontLoaders: [
		{ loader: '@next/font/google', options: { subsets: ['latin'] } },
	],
	images: {
		// dangerouslyAllowSVG: true,
		// contentDispositionType: 'attachment',
		// contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		// remotePatterns: [
		// 	{
		// 		protocol: 'https',
		// 		hostname: 'mentorkgapi.pythonanywhere.com',
		// 	},
		// ],
		domains: [
			'mentorkgapi.pythonanywhere.com',
			'getmentor.dev',
			'getmentor.blob.core.windows.net',
		],
	},
}

module.exports = nextConfig
