/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.shopify.com",
				port: "",
				pathname: "/s/files/1/0599/6373/6196/products/**",
			},
		],
	},
};

export default nextConfig;
