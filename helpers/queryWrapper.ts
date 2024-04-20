import axios from "axios";

export async function shopifyFetch({
	query,
	variables,
}: {
	query: any;
	variables: any;
}) {
	const endpoint = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN as string;
	const key = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN as string;

	console.log("environments :", endpoint, key);

	try {
		const result = axios.post(
			endpoint,
			{
				query,
				variables,
			},
			{
				headers: {
					"Content-Type": "application/json",
					"X-Shopify-Storefront-Access-Token": key,
				},
			}
		);

		const responseBody = await result;

		console.log({
			status: (await result).status,
			body: responseBody,
		});

		return {
			status: (await result).status,
			body: responseBody?.data?.data,
		};
	} catch (error) {
		console.error("Error:", error);
		return {
			status: 500,
			error: "Error receiving data",
		};
	}
}
