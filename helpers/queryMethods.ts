import axios from "axios";
import {
	getAllCollectionsQuery,
	getAllProductTypesQuery,
	getProductByIdQuery,
	getProductsByProductTypeQuery,
} from "./graphqlQueries";
import { shopifyFetch } from "./queryWrapper";

export async function getAllProductTypes() {
	const { query, variables } = getAllProductTypesQuery();
	const response = await shopifyFetch({ query, variables });
	console.log(response.body?.productTypes?.edges);
}

export async function getProductsByProductType(category: string) {
	const { query, variables } = getProductsByProductTypeQuery(category);
	const response = await shopifyFetch({ query, variables });
	const products = response?.body?.products?.edges;
	return products;
}

export async function getAllCollections() {
	const { query, variables } = getAllCollectionsQuery();
	const response = await shopifyFetch({ query, variables });
}

export async function getProductById(id: string) {
	const { query, variables } = getProductByIdQuery(id);
	const response = await shopifyFetch({ query, variables });
	return response;
}
